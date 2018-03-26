require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#Index
get '/bikes' do
  @bikes = query_db 'SELECT * FROM bikes'
  erb :bikes_index
end

#New
get'/bikes/new' do
  erb :bikes_new
end

#Create
post '/bikes' do
query_db "INSERT INTO bikes (name, family, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  redirect to('/bikes') #GET request
  end

#show
get '/bikes/:id' do
  @bike = query_db "SELECT * FROM bikes WHERE id= #{pramas [:id]}"
  @bike = @bike.first
  erb :Bikes_show
end

# Edit
get '/bikes/:id/ediit' do
  @bike = query_db"DELETE FROM bikes WHERE id = #{params [:id]}"
  @bike = @bike.first
  # show bikes in format
  erb :bikes_edit
end

#Update
post '/bikes/:id' do
  #update bikes in the database
  query_db "UPDATE bikes SET name='#{params[:name]}', family='#{params[:family]}',image='#{params[:image]}' WHERE id=#{params[:id]}"
  #redirect to show page
  redirect to ("/bikes/#{params[:id]}") #get request
end


#Delete
get '/bikes/:id/delete' do
  #delete bike
  query_db "DELETE FROM bikes WHERE id = #{params [:id]}"
  redirect to '/bikes'
  #redirect to the index
end


def query_db (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  results = db.execute sql_statement
  db.close
  results
end
