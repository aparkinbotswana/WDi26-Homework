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

class Movie < ActiveRecord::Base
  belongs_to :actor
end

class Actor < ActiveRecord::Base
  has_many :movies
end

get '/' do
  erb :home
end

# Index
get '/movies' do
  @movies = Movie.all
  erb :movies_index
end

# New
get '/movies/new' do
  erb :movies_new
end

# Create
post '/movies' do
  movie = Movie.new
  movie.name = params[:name]
  movie.year = params[:year]
  movie.image = params[:image]
  movie.actor_id = params[:actor_id]
  movie.save
  redirect to('/movies')
end

# Show
get '/movies/:id' do
  @movie = Movie.find params[:id]
  erb :movies_show
end

# Edit
get '/movies/movies/:id/edit' do
  @movie = Movie.find params[:id]
  erb :movies_edit
end

# Update
post '/movies/:id' do
  movie = Movie.find params[:id]
  movie.name = params[:name]
  movie.year = params[:year]
  movie.image = params[:image]
  movie.actor_id = params[:actor_id]
  movie.save
  redirect to ("/movies/#{ params[:id] }")
end

# Delete
get '/movies/movies/:id/delete' do
  movie = Movie.find params[:id]
  movie.destroy
  redirect to ('/movies')
end

# Index
get '/actors' do
  @actors = Actor.all
  erb :actors_index
end

# New
get '/actors/new' do
  erb :actors_new
end

# Create
post '/actors' do
  actor = Actor.new
  actor.name = params[:name]
  actor.born = params[:born]
  actor.image = params[:image]
  actor.save
  redirect to("/actors/#{ actor.id }")
end

# Show
get '/actors/:id' do
  @actor = Actor.find params[:id]
  erb :actors_show
end

# Edit
get '/actors/actors/:id/edit' do
  @actor = Actor.find params[:id]
  erb :actors_edit
end

# Update
post '/actors/:id' do
  actor = Actor.find params[:id]
  actor.name = params[:name]
  actor.born = params[:born]
  actor.image = params[:image]
  actor.save
  redirect to ("/actors/#{ actor.id }")
end

# Delete
get '/actors/actors/:id/delete' do
  actor = Actor.find params[:id]
  actor.destroy
  redirect to("/actors")
end

after do
  ActiveRecord::Base.connection.close
end
