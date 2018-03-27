require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# ACTIVE RECORD
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'gotdb.sqlite3'
)

# Optional - log ActiveRecord output
ActiveRecord::Base.logger = Logger.new(STDERR)

class Character < ActiveRecord::Base
  belongs_to :house  # i.e. THERE WILL BE A house_id COLUMN IN THE butterflies TABLE
end

class House < ActiveRecord::Base
  has_many :characters
end


# HOME
get '/' do
  erb :home
end




# CHARACTERS -----------------------------------------------------
# INDEX
get '/characters' do
  @characters = Character.all
  # binding.pry
  erb :characters_index
end


# NEW
get '/characters/new' do
  erb :characters_new
end


# CREATE
post '/characters' do
  character = Character.new
  character.name = params[:name]
  character.death_season = params[:death_season]
  character.death_ep = params[:death_ep]
  character.death_how = params[:death_how]
  character.thumbnail_url = params[:thumbnail_url]
  character.save
  redirect to('/characters') # GET request
end


# SHOW
get '/characters/:id' do
  @character = Character.find params[:id]
  # binding.pry
  erb :characters_show
end



# EDIT
get '/characters/:id/edit' do
  @character = Character.find params[:id]

  erb :characters_edit
end


# UPDATE
post '/characters/:id' do
  character = Character.find params[:id]
  character.name = params[:name]
  character.death_season = params[:death_season]
  character.death_ep = params[:death_ep]
  character.death_how = params[:death_how]
  character.thumbnail_url = params[:thumbnail_url]
  character.house_id = params[:house_id]
  character.save
  redirect to("characters/#{params[:id]}")  # GET request
end


# DELETE
get '/characters/:id/delete' do
  character = Character.find params[:id]
  character.destroy
  redirect to('/characters')
end


# HOUSES -----------------------------------------------------
# INDEX
get '/houses' do
  @houses = House.all

  erb :houses_index
end


# NEW
get '/houses/new' do

  erb :houses_new
end


# CREATE
post '/houses' do
  house = House.new
  house.name = params[:name]
  house.seat = params[:seat]
  house.house_type = params[:house_type]
  house.words = params[:words]
  house.sigil_url = params[:sigil_url]
  house.save
  redirect to('/houses') # GET request
end

# SHOW
get '/houses/:id' do
  @house = House.find params[:id]

  erb :houses_show
end


# EDIT
get '/houses/:id/edit' do
  @house = House.find params[:id]

  erb :houses_edit
end


# UPDATE
post '/houses/:id' do
  house = House.find params[:id]
  house.name = params[:name]
  house.seat = params[:seat]
  house.house_type = params[:house_type]
  house.words = params[:words]
  house.sigil_url = params[:sigil_url]
  house.save
  redirect to("houses/#{params[:id]}")  # GET request
end

# DELETE
get '/houses/:id/delete' do
  house = House.find params[:id]
  house.destroy
  redirect to('/houses')
end
#
