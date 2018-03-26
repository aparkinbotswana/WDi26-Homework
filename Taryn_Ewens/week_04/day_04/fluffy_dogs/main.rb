require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/fluffy_dogs' do
  @fluffy_dogs = query_db 'SELECT * FROM fluffy_dogs'
  erb :fluffy_dogs_index
end

# New
get '/fluffy_dogs/new' do
  erb :fluffy_dogs_new
end

# Create
post '/fluffy_dogs' do
  query_db "INSERT INTO fluffy_dogs (breed, origin, image) VALUES ('#{params[:breed]}', '#{params[:origin]}', '#{params[:image]}')"
  redirect to('/fluffy_dogs')
end

# Show
get '/fluffy_dogs/:id' do
  @fluffy_dog = query_db "SELECT * FROM fluffy_dogs WHERE id = #{params[:id]}"
  @fluffy_dog = @fluffy_dog.first
  erb :fluffy_dogs_show
end

# Edit
get '/fluffy_dogs/:id/edit' do
  @fluffy_dog = query_db "SELECT * FROM fluffy_dogs WHERE id = #{params[:id]}"
  @fluffy_dog = @fluffy_dog.first
  erb :fluffy_dogs_edit
end

# Update
post '/fluffy_dogs/:id' do
  query_db "UPDATE fluffy_dogs SET breed='#{params[:breed]}', origin='#{params[:origin]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/fluffy_dogs/#{params[:id]}")
end

# DELETE
get '/fluffy_dogs/:id/delete' do
  query_db "DELETE FROM fluffy_dogs WHERE id = #{params[:id]}"
  redirect to('/fluffy_dogs')
end

# FUNCTION
def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement # Optional bonus

  results = db.execute sql_statement
  db.close
  results
end
