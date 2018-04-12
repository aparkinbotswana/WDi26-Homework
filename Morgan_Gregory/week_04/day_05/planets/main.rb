require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Moon < ActiveRecord::Base
  belongs_to :planet
end

class Planet < ActiveRecord::Base
  has_many :moons
end

# home page display
get '/' do
  @planets = Planet.all
  # @planets.image.clip
  # binding.pry
  erb :home
end

#### MOONS #################################################
# moons index page display
get '/moons' do
  @moons = Moon.all.order('name asc')
  erb :moons_index
end

# new moon creation page display
get '/moons/new' do
  erb :moons_new
end

# add a new moon record to the moons table page
post '/moons' do
  moon = Moon.new
  moon.name = params[:name]
  moon.image = params[:image]
  moon.clip = params[:clip]
  moon.planet_id = params[:planet_id]
  moon.save
  redirect to('/moons') # GET request
end

# display a single moon page
get '/moons/:id' do
  @moon = Moon.find params[:id]
  erb :moons_show
end

# edit a single moon record page
get '/moons/:id/edit' do
  @moon = Moon.find params[:id]
  erb :moons_edit
end

# update moon record in moons table
post '/moons/:id' do
  moon = Moon.find params[:id]
  moon.name = params[:name]
  moon.image = params[:image]
  moon.clip = params[:clip]
  moon.planet_id = params[:planet_id]
  moon.save # QUESTION: save changes to record - why doesnt this do what the line below does?
  redirect to("/moons/#{ params[:id] }") # QUESTION: is this GET the correct moon by id and update the record in the moons table?
end

# delete single moon record
get '/moons/:id/delete' do
  moon = Moon.find params[:id]
  moon.destroy
  redirect to('/moons')
end

#### PLANETS #################################################
# planets index page display
get '/planets' do
  @planets = Planet.all.order('period2 asc')
  erb :planets_index
end

# create new planet page display
get '/planets/new' do
  erb :planets_new
end

# add new planet record to planets table
post '/planets' do
  planet = Planet.new
  planet.name = params[:name]
  planet.radius = params[:radius]
  planet.earths = params[:earths]
  planet.period2 = params[:period2]
  planet.image = params[:image]
  planet.clip = params[:clip]
  planet.save
  redirect to("/planets/#{ planet.id }")
end

# display single planet page
get '/planets/:id' do
  @planet = Planet.find params[:id]
  erb :planets_show
end

# display planets edit single planet page
get '/planets/:id/edit' do
  @planet = Planet.find params[:id]
  erb :planets_edit
end

# update the single planet record in planets table
post '/planets/:id' do
  planet = Planet.find params[:id]
  planet.name = params[:name]
  planet.radius = params[:radius]
  planet.earths = params[:earths]
  planet.period2 = params[:period2]
  planet.image = params[:image]
  planet.clip = params[:clip]
  planet.save
  redirect to("/planets/#{ planet.id }") # GET request
end

# delete a single planet record in the planets table
get '/planets/:id/delete' do
  planet = Planet.find params[:id]
  planet.destroy
  redirect to('/planets')
end

# Joel's secret:
get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
