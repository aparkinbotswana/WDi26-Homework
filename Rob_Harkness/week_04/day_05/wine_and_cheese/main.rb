require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Cheese < ActiveRecord::Base
  belongs_to :wine 
end

class Wine < ActiveRecord::Base
  has_many :cheeses
end

############### ROUTES ##############################

## home ##############
get '/' do
  erb :home
end


# index ###############################################
get '/cheeses' do
  @cheeses = Cheese.all

  erb :cheeses_index
end


# new ###############################################
get '/cheeses/new' do
  erb :cheeses_new
end

# create ###############################################


post '/cheeses' do
  cheese = Cheese.new
  cheese.name = params[:name]
  cheese.age = params[:age]
  cheese.firmness = params[:firmness]
  cheese.origin = params[:origin]
  cheese.wine_id = params[:wine_id]
  cheese.save
  redirect to('/cheeses')
end


# show ##################################################
get '/cheeses/:id' do
  @cheese = Cheese.find params[:id]

  erb :cheeses_show
end

# edit ######################################################
get '/cheeses/:id/edit' do
  @cheese = Cheese.find params[:id]

  erb :cheeses_edit
end


# update ######################################################
post '/cheeses/:id' do
  cheese = Cheese.find params[:id]
  cheese.name = params[:name]
  cheese.age = params[:age]
  cheese.firmness = params[:firmness]
  cheese.origin = params[:origin]
  cheese.image = params[:image]
  cheese.wine_id = params[:wine_id]
  cheese.save
  redirect to("/cheeses/#{params[:id]}")
end


##### DELETE ########################################
get '/cheeses/:id/delete' do
  cheese = Cheese.find params[:id]
  cheese.destroy
  redirect to('/cheeses')
end


#### wineS ###############

### index ##############
get '/wines' do
  @wines = Wine.all

  erb :wines_index
end


########## new wine ################3

get '/wines/new' do
  erb :wines_new
end

post '/wines' do
  wine = Wine.new
  wine.variety = params[:variety]
  wine.color = params[:variety]
  wine.image = params[:image]
  wine.save
  redirect to('/wines')
end

# show ##################################################
get '/wines/:id' do
  @wine = Wine.find params[:id]

  erb :wines_show
end

## edit #########################
get '/wines/:id/edit' do
  @wine = Wine.find params[:id]
  erb :wines_edit
end


# update ######################################################
post '/wines/:id' do
  wine = Wine.find params[:id]
  wine.variety = params[:variety]
  wine.color = params[:color]
  wine.image = params[:image]
  wine.save
  redirect to("/wines/#{params[:id]}")
end


##### DELETE ########################################
get '/wines/:id/delete' do
  wine = Wine.find params[:id]
  wine.destroy
  redirect to('/wines')
end

#### close DB ##############################
after do
  ActiveRecord::Base.retrieve_connection.close
end
