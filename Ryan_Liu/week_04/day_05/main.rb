require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#Optional but nice to have

ActiveRecord::Base.logger = Logger.new(STDERR)

class Todoitem < ActiveRecord::Base
  belongs_to :todolist
end

class Todolist < ActiveRecord::Base
  has_many :todoitems
end

#Home
get '/' do
  erb :home
end

#Index
get '/todolists' do
  @todolists = Todolist.all
  erb :todolists_index
end

#new
get '/todolists/new' do
  erb :todolists_new
end

#Create
post '/todolists' do
  todolist = Todolist.new
  todolist.list_name = params[:list_name]
  todolist.tag = params[:tag]
  todolist.save
  redirect to('/todolists')
end

#Show
get '/todolists/:id' do
  @todolist = Todolist.find params[:id]

  erb :todolists_show
end

#Edit
get '/todolists/:id/edit' do
  @todolist = Todolist.find params[:id]
  erb :todolists_edit
end

#Update
post '/todolists/:id' do
  todolist = Todolist.find params[:id]
  todolist.list_name = params[:list_name]
  todolist.tag = params[:tag]
  todolist.save
  redirect to("/todolists/#{todolist.id}")
end

#Delete
get '/todolists/:id/delete' do
  todolist = Todolist.find params[:id]
  todolist.destroy
  redirect to('todolists')
end


###########################################
# Todoitems

get '/todoitems' do
  @todoitems = Todoitem.all
  erb :todoitems_index
end

get '/todoitems/new' do
  erb :todoitems_new
end

post '/todoitems' do
  todoitem = Todoitem.new
  todoitem.item_name = params[:item_name]
  todoitem.todolist_id = params[:todolist_id]
  todoitem.save
  redirect to('/todoitems')
end

get '/todoitems/:id' do
  @todoitem = Todoitem.find params[:id]
  erb :todoitems_show
end

get '/todoitems/:id/edit' do
  @todoitem = Todoitem.find params[:id]
  erb :todoitems_edit
end

post '/todoitems/:id' do
  todoitem = Todoitem.find params[:id]

  todoitem.item_name = params[:item_name]
  todoitem.todolist_id = params[:todolist_id]
  todoitem.save
  redirect to("/todoitems/#{todoitem.id}")
end

get '/todoitems/:id/delete' do
  todoitem = Todoitem.find params[:id]
  todoitem.destroy
  redirect to('/todoitems')
end



after do
  ActiveRecord::Base.connection.close
end
