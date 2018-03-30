require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/galaxies' do
  @galaxies = query_db 'SELECT * FROM galaxies'
  erb :galaxies_index
end

# New
get '/galaxies/new' do
  erb :galaxies_new
end

# Create
post '/galaxies' do
  query_db "INSERT INTO galaxies (name, type, image) VALUES ('#{params[:name]}', '#{params[:type]}', '#{params[:image]}')"
  redirect to ('/galaxies')

end

# Show
get '/galaxies/:id' do
  @galaxies = query_db "SELECT * FROM galaxies WHERE id = #{ params[:id] }"
  @galaxies = @galaxies.first # Stripping away the outer array
  erb :galaxies_show
end

# Edit
get '/galaxies/:id/edit' do
  @galaxies = query_db "SELECT * FROM galaxies WHERE id = #{ params[:id] }"
  @galaxies = @galaxies.first # Stripping away the outer array
  erb :galaxies_edit
end

# Update
post '/galaxies/:id' do
  query_db "UPDATE galaxies SET name='#{ params[:name] }', type='#{ params[:type] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to ("/galaxies/#{ params[:id] }") # GET request
end

# Delete
get '/galaxies/:id/delete' do
  query_db "DELETE FROM galaxies WHERE id = #{ params[:id]}"
  redirect to ('/galaxies')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute sql_statement
  db.close
  results
end
