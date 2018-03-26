require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'sqlite3'

get '/' do
  erb :home
end

get '/whiskys' do
  @whiskys = query_db 'SELECT * FROM whiskys'
  erb :whiskys_index
end

get '/whiskys/new' do
  erb :whiskys_new
end

post '/whiskys' do
  query_db "INSERT INTO whiskys (name, origin, image) VALUES ('#{params[:name]}', '#{params[:origin]}', '#{params[:image]}')"
  redirect to ('/whiskys')
end

get '/whiskys/:id' do

  @whisky = query_db "SELECT * FROM whiskys WHERE id=#{params[:id]}"

  @whisky = @whisky.first

  erb :whiskys_show
end

get '/whiskys/:id/delete' do
query_db "DELETE FROM whiskys WHERE id = #{params[:id]}"
  redirect to('/whiskys')
end

get '/whiskys/:id/edit' do
  @whisky = query_db "SELECT * FROM whiskys WHERE id = #{params[:id]}"
  @whisky = @whisky.first
  erb :whiskys_edit
end

post '/whiskys/:id' do
  query_db "UPDATE whiskys SET name='#{params[:name]}', origin='#{params[:origin]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to ("/whiskys/#{params[:id]}")
end


def query_db(sql_statement) # To avoid needing to establish database connection in every code block
  db = SQLite3::Database.new 'database.sqlite3' # Establish new connection to database
  db.results_as_hash = true
  puts sql_statement # Show the sql_statement in terminal so you can see what you're doing
  results = db.execute sql_statement
  db.close # Close connection to database, since you can only have a certain number of connections at once
  results # Return results
end
