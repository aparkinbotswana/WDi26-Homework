require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'


ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database1.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Virtual < ActiveRecord::Base
  has_many :application
end

class Application < ActiveRecord::Base
  belongs_to :virtuals
end


get '/' do
  erb :home
end

#index
get '/virtuals' do
  @virtuals = Virtual.all
  erb :virtuals_index
end

#New
get '/virtuals/new' do
  erb :virtuals_new
end

#CREATE
post '/virtuals' do
  # binding.pry
  virtual = Virtual.new
  virtual.name = params[:name]
  virtual.gadgets = params[:gadgets]
  virtual.image = params[:image]
  # virtual.application_id = params[:application_id]
  virtual.save
  redirect to('/virtuals')
end


#show
get '/virtuals/:id' do
  @virtual = Virtual.find params[:id]
  # binding.pry
  erb :virtuals_show
end

#Edit
get '/virtuals/:id/edit' do
  # binding.pry
  @virtual = Virtual.find params[:id]
  erb :virtuals_edit
end


#Update
post '/virtuals/:id' do
  virtual = Virtual.find params[:id]
  virtual.name = params[:name]
  virtual.gadgets = params[:gadgets]
  virtual.image = params[:image]
  # virtual.application_id = params[:application_id]
  virtual.save
  redirect to("/virtuals/#{ params[:id] }") #get resquest

end

#Delete
get '/virtuals/:id/delete' do
  virtual = Virtual.find params[:id]
  virtual.destroy
  redirect to('/virtuals')
end

#Index
get '/applications' do
  @applications = Application.all
  erb :applications_index
end

#new
get '/applications/new' do
  erb :applications_new
end

#CREATE
post '/applications' do
  application = Application.new
  application.name = params[:name]
  application.image = params[:image]
  application.virtual_id = params[:virtual_id]
  application.save
  redirect to("/applications/#{ application.id }")

end

#show
get '/applications/:id' do
  @application = Application.find params[:id]
  # binding.pry
  erb :applications_show
end

#Edit
get '/applications/:id/edit' do
  @application = Application.find params[:id]
  erb :applications_edit
end


#Update
post '/application/:id' do
  application = Application.find params[:id]
  application.name = params[:name]
  application.image = params[:image]
  application.virtual_id = params[:virtual_id]
  application.save
  redirect to("/applications/#{ application.id}")

end

#delete
get '/applications/:id/delete' do
  application = Application.find params[:id]
  application.destroy
  redirect to("/applications")
end

get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
