require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql_statement
  results = db.execute sql_statement
  db.close
  results
end

get '/' do
  erb :home
end

get '/cats_main' do
  @cats_list = query_db "SELECT * FROM cats"
  erb :cats_main
end

get '/cats/:id' do
  @cat = query_db "SELECT * FROM cats WHERE id = #{params[:id]}"
  @cat = @cat.first
  erb :cats_show
end

get '/cats_new' do
  erb :cats_new
end

post '/cats_main' do
  query_db "INSERT INTO cats (name, breed, dob, image) VALUES ('#{params[:name]}', '#{params[:breed]}', '#{params[:dob]}', '#{params[:image]}')"
  redirect to ('/cats_main')
end

get '/cats/:id/delete' do
  query_db "DELETE FROM cats WHERE id = #{params[:id]}"
  redirect to ('/cats_main')
end

get '/cats/:id/edit' do
  @cat = query_db "SELECT * FROM cats WHERE id = #{params[:id]}"
  @cat = @cat.first

  erb :cats_edit
end

post '/cats/:id' do
  query_db "UPDATE cats SET name='#{params[:name]}', breed='#{params[:breed]}', dob='#{params[:dob]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/cats/#{params[:id]}")
end
