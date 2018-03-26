require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

#home page
get '/' do
  erb :home
end

# All Art Page
get '/art' do
  @artstyles = query_db "SELECT * FROM artstyles"

  erb :art_index
end

# create New art page
get '/art/new' do

  erb :art_new
end

post '/art' do
  query_db "INSERT INTO artstyles(art_type, art_defi, fam_artist, art_image)
  VALUES('#{params[:art_type]}' , '#{params[:art_defi]}','#{params[:fam_artist]}','#{params[:art_image]}' )"
  redirect to ('/art')
end

get '/art/:id' do
  @artstyle = query_db "SELECT * FROM artstyles WHERE id = #{params[:id]}"
  @artstyle = @artstyle.first
  erb :art_show
end


get '/art/:id/edit' do
  @artstyle = query_db "SELECT * FROM artstyles WHERE id = #{params[:id]}"
  @artstyle = @artstyle.first
  erb :art_edit

end

post '/art/:id' do

  query_db "UPDATE artstyles set art_type= '#{params[:art_type]}',art_defi= '#{params[:art_defi]}',fam_artist= '#{params[:fam_artist]}',art_image= '#{params[:art_image]}' where id =#{params[:id]}"
  redirect to("/art/#{params[:id]}")
end

get '/art/:id/delete' do

query_db "DELETE FROM artstyles where id = #{params[:id]}"
redirect to('/art')
end


def query_db (sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql_statement
  results = db.execute sql_statement
  db.close
  results

end
