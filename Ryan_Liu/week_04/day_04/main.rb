require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

# Get Home
get '/' do
  erb :home
end

# Get All profiles
get '/profiles' do

  @characters = query_db 'SELECT * FROM characters'
  erb :profiles
end

# New
get '/profiles/new' do
  erb :profiles_new
end

# Create
post '/profiles' do
  db = SQLite3::Database.new 'database.sqlite3'
  db.execute "INSERT INTO characters (name, home_world, film, height, film_url) VALUES ('#{params[:name]}', '#{params[:home_world]}', '#{params[:film]}', '#{params[:height]}', '#{params[:film_url]}')"

  redirect to('/profiles')
end

# Get particular profile
get '/profiles/:id' do

  @character = query_db "SELECT * FROM characters WHERE id=#{params[:id]}"
  @character = @character.first
  @character.inspect

  erb :profiles_show
end

#Edit

get '/profiles/:id/edit' do
  @character = query_db "SELECT * FROM characters WHERE id=#{params[:id]}"
  @character = @character.first

  erb :profiles_edit
end

#Update
post '/profiles/:id' do

  query_db "UPDATE characters SET name='#{params[:name]}', home_world='#{params[:home_world]}', film='#{params[:film]}', height='#{params[:height]}', film_url='#{params[:film_url]}' WHERE id=#{params[:id]}"
  redirect to("/profiles/#{params[:id]}")
end

#Delete
get '/profiles/:id/delete' do
  query_db "DELETE FROM characters WHERE id=#{params[:id]}"
  redirect to('/profiles')
end


def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  results = db.execute sql_statement
  db.close
  results
end
