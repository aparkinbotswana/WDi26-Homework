require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index page:
get '/kittens' do
  @kittens = query_db 'SELECT * FROM kittens'
  erb :kittens_index
end

# Display new kitten page
get '/kittens/new' do
  erb :kittens_new
end

# Add new kitten to db
post '/kittens' do
  query_db "INSERT INTO kittens (name, age, image) VALUES ('#{params[:name]}', '#{params[:age]}', '#{params[:image]}')"
  redirect to('/kittens')
end

# Show kitten
get '/kittens/:id' do
  @kitten = query_db "SELECT * FROM kittens WHERE id = #{params[:id]}"
  @kitten = @kitten.first

  erb :kittens_show
end

# Edit kitten record
get '/kittens/:id/edit' do
  @kitten = query_db "SELECT * FROM kittens WHERE id = #{params[:id]}"
  @kitten = @kitten.first

  erb :kittens_edit
end

# Update db to contain edited record
post '/kittens/:id' do
  query_db "UPDATE kittens SET name='#{ params[:name] }', age='#{ params[:age] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"

  redirect to("/kittens/#{ params[:id] }")
end

# Delete action
get '/kittens/:id/delete' do
  query_db "DELETE FROM kittens WHERE id = #{ params[:id] }"
  redirect to('/kittens')
end

# funciton to adhere to DRY ie writing out this line
#db = SQLite3::Database.new 'database.sqlite3'
def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement

  results = db.execute sql_statement
  db.close
  results
end
