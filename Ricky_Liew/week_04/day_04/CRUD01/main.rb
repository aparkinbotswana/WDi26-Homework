require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/movies' do
  db = SQLite3::Database.new 'kmovies.sqlite3'
  db.results_as_hash = true

  @movies = db.execute "SELECT * FROM movies_by_keanu"  # semicolon optional here
  db.close

  erb :movies_index
end


# New
get '/movies/new' do
  erb :movies_new
end

# Create
post '/movies' do
  db = SQLite3::Database.new 'kmovies.sqlite3'
  db.results_as_hash = true

  @movies = db.execute "INSERT INTO movies_by_keanu (title, release_year, rating, poster) VALUES ('#{params[:title]}', '#{params[:release_year]}', '#{params[:rating]}', '#{params[:poster]}')"
  redirect to('/movies')
end

# Show
get '/movies/:id' do
  db = SQLite3::Database.new 'kmovies.sqlite3'
  db.results_as_hash = true

  @movie = db.execute "SELECT * FROM movies_by_keanu WHERE id = #{ params[:id]}"
  @movie = @movie.first

  erb :movies_show
end


# Edit
get '/movies/:id/edit' do
  db = SQLite3::Database.new 'kmovies.sqlite3'
  db.results_as_hash = true

  @movie = db.execute "SELECT * FROM movies_by_keanu WHERE id = #{ params[:id]}"
  @movie = @movie.first

  erb :movies_edit
end

# Update
post '/movies/:id' do
  db = SQLite3::Database.new 'kmovies.sqlite3'
  db.results_as_hash = true

  @movie = db.execute "UPDATE movies_by_keanu SET title='#{params[:title]}', release_year='#{params[:release_year]}', rating='#{params[:rating]}', poster='#{params[:poster]}' WHERE id=#{params[:id]}"
  redirect to("/movies/#{params[:id]}")  # GET request
end
