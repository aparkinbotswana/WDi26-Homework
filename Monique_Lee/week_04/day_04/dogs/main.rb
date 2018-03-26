require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#index
get '/dogs' do
@dogs = query_db 'SELECT * FROM dogs'
erb :dogs_index
end

#new
get '/dogs/new' do
  erb :dogs_new
end

#create
post '/dogs' do
  query_db "INSERT INTO dogs (breed, origin, temperament, image) VALUES ('#{params[:breed]}', '#{params[:origin]}', '#{params[:temperament]}', '#{params[:image]}')"
  redirect to('/dogs')
end

#show
get '/dogs/:id' do
  @dog = query_db "SELECT * FROM dogs WHERE id = #{ params[:id] }"
  @dog = @dog.first
  erb :dogs_show
end

#edit
get '/dogs/:id/edit' do
  @dog = query_db "SELECT * FROM dogs WHERE id = #{ params[:id] }"
  @dog = @dog.first
  erb :dogs_edit
end

#update
post '/dogs/:id' do
  query_db "UPDATE dogs SET breed='#{ params[:breed]}', origin='#{ params[:origin]}', temperament='#{params[:temperament]}', image='#{ params[:image]}' WHERE id=#{ params[:id] }"
  redirect to("/dogs/#{ params[:id] }")
end

#delete
get '/dogs/:id/delete' do
  query_db "DELETE FROM dogs WHERE id=#{ params[:id] }"
redirect to('/dogs')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql_statement
  results = db.execute sql_statement
  db.close
  results
end
