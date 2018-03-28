require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/flowers' do
  @flowers = query_db 'SELECT * FROM flowers'
  erb :flowers_index
end
#flowers_new
get '/flowers/new' do
  erb :flowers_new
end
#create
post '/flowers' do
  query_db "INSERT INTO flowers(name,family,image) VALUES('#{params[:name]}','#{params[:family]}','#{params[:image]}')"
  redirect to ('/flowers')
end
#show
get '/flowers/:id' do
  @flower = query_db "SELECT * FROM flowers WHERE id =#{params[:id]}"
  @flower = @flower.first
  erb :flowers_show

end
#Edit
get '/flowers/:id/edit' do
  @flower = query_db "SELECT * FROM flowers where id = #{params[:id]}"
  @flower = @flower.first
  erb :flowers_edit
end

#Update
post '/flowers/:id' do

  query_db "UPDATE flowers SET name = '#{params[:name]}',family = '#{params[:family]}',image = '#{params[:image]}' WHERE id = #{params[:id]}"
  #redirect to the show page
  redirect to ("/flowers/#{params[:id]}") #get request
end

get '/flowers/:id/delete' do

query_db "DELETE FROM flowers WHERE id =#{params[:id]}"
#redirect to the index
redirect to('/flowers')
end

def query_db(sql_statement)
db = SQLite3::Database.new 'database.sqlite3'
db.results_as_hash = true
puts sql_statement
results = db.execute sql_statement
db.close
results
end
