require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/motorsport' do
  @motorsport = query_db "SELECT * FROM motorsport" #This is selecting everything from the database
  erb :motorsport_index
end

get '/motorsport/new' do
  erb :motorsport_new
end

post '/motorsport' do
  query_db "INSERT INTO motorsport (name, team, num, image) VALUES ('#{params[:name]}', '#{params[:team]}', '#{params[:num]}', '#{params[:image]}')"
  redirect to ('/motorsport')
end

get '/motorsport/:id' do
  @motorsport = query_db "SELECT * FROM motorsport WHERE id = #{params[:id]}"
  @motorsport = @motorsport.first

  erb :motorsport_show
end

get '/motorsport/:id/edit' do
  @motorsport = query_db "SELECT * FROM motorsport WHERE id = #{params[:id]}"
  @motorsport = @motorsport.first

  erb :motorsport_edit
end

post '/motorsport/:id' do
  query_db "UPDATE motorsport SET name='#{params[:name]}', team='#{params[:team]}', num='#{params[:num]}', image='#{params[:image]}' WHERE id='#{params[:id]}'"
  redirect to("/motorsport/#{params[:id]}")
end

get '/motorsport/:id/delete' do
  query_db "DELETE FROM motorsport WHERE id = #{params[:id]}"
  redirect to ('/motorsport')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3' # We're opening the database
  db.results_as_hash = true

  results = db.execute sql_statement
  db.close
  results
end
