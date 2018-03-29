require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/cats' do
  @cats = query_db 'SELECT * FROM cats'
  erb :cats_index
end

# New cat
get '/cats/new' do
  erb :cats_new
end

# Create action
post '/cats' do
  query_db "INSERT INTO cats (name, age, breed, image) VALUES ('#{params["name"]}', '#{params[:age]}', '#{params[:family]}', '#{params[:image]}')"
  redirect to ('/cats') # GET request
end

# Show
get '/cats/:id' do

  @cat = query_db "SELECT * FROM cats WHERE id = #{ params[:id] }"
  @cat = @cat.first
  erb :cats_show
end



def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  results = db.execute sql_statement
  db.close
  results

end
