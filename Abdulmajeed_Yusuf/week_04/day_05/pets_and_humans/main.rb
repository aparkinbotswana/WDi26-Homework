require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

#Rails will do this for you, but in the meanwhile:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

#Opional but nice to have
ActiveRecord::Base.logger = Logger.new(STDERR)

class Butterfly < ActiveRecord::Base
  belongs_to :plant #i.e. There will be a plant_id column in the butterflies table.
end

class Plant < ActiveRecord::Base
  has_many :butterflies
end

binding.pry

get '/' do
  erb :home
end

#Index page
get '/butterflies' do
  @butterflies = Butterfly.all
  erb :butterflies_index
end

#New
get '/butterflies/new' do
  erb :butterflies_new
end

#Create
post '/butterflies' do
  butterfly = Butterfly.new
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:plant_id]
  butterfly.save
  redirect to ('/butterflies') #This is a GET request
end

#Show
get '/butterflies/:id' do
  @butterfly = Butterfly.find params[:id]
  erb :butterflies_show
end

#Edit
get '/butterflies/:id/edit' do
    @butterfly = Butterfly.find params[:id]
    erb :butterflies_edit #Show that butterfly in a form
end

#Update
post '/butterflies/:id' do
  butterfly = Butterfly.find params[:id]
  butterfly.name = params[:name]
  butterfly.family = params[:family]
  butterfly.image = params[:image]
  butterfly.plant_id = params[:id]
  butterfly.save
  redirect to("/butterflies/#{params[:id]}") #Redirect is always a GET request
end

#delete
get '/butterflies/:id/delete' do
  butterfly = Butterfly.find params[:id]
  butterfly.destroy
  redirect to('/butterflies')
end

# Index page
get '/plants' do
  @plants = Plant.all
  erb :plants_index
end

#New
get '/plants/new' do
  erb :plants_new
end

#Create
post '/plants' do
  plant = Plant.new
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }")
end

#show
get '/plants/:id' do
  @plant = Plant.find params[:id]
  erb :plants_show
end

#Edit
get '/plants/:id/edit' do
  @plant = Plant.find params[:id]
  erb :plants_edit
end

#Update
post '/plants/:id' do
  plant = Plant.find params[:id]
  plant.name = params[:name]
  plant.image = params[:image]
  plant.save
  redirect to("/plants/#{ plant.id }") #Get request
end

#delete
get '/plants/:id/delete' do
  plant = Plant.find params[:id]
  plant.destroy
  redirect to('/plants')
end

#Secret - Only use for personal use as it stops code from running
get '/pry' do
  binding.pry
end


after do
  ActiveRecord::Base.connection.close
end
