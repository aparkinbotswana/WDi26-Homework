
require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/seasons' do
  @seasons = query_db 'SELECT * FROM seasons'
  erb :seasons_index
end

# New
get '/seasons/new' do
  erb :seasons_new
end

# Create
post '/seasons' do
  query_db "INSERT INTO seasons (name, month, image) VALUES ('#{params[:name]}', '#{params[:family]}', '#{params[:image]}')"
  redirect to('/seasons') # GET request
end

# Show
get '/seasons/:id' do
  @season = query_db "SELECT * FROM seasons WHERE id = #{ params[:id] }"
  @season = @season.first # Stripping away the outer array
  erb :seasons_show
end

# Edit
get '/seasons/:id/edit' do
  @season = query_db "SELECT * FROM seasons WHERE id = #{ params[:id] }"
  @season = @season.first # Stripping away the outer array
  erb :seasons_edit
end

# Update
post '/seasons/:id' do
  query_db "UPDATE seasons SET name='#{ params[:name] }', month='#{ params[:month] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/seasons/#{ params[:id] }") # GET request
end

# Delete
get '/seasons/:id/delete' do
  query_db "DELETE FROM seasons WHERE id = #{ params[:id] }"
  redirect to('/seasons')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement # Optional bonus

  results = db.execute sql_statement
  db.close
  results
end











# require 'sinatra'
# require 'sinatra/reloader'
# require 'sqlite3'
# require 'pry'
#
# get '/' do
#   erb :home
# end
#
# #index
# get '/seasons' do
#   @seasons = query_db 'SELECT * FROM seasons'
#   erb :seasons_index
# end
#
# # New
# get '/seasons_new' do
#   erb :seasons_new
# end
#
# #create
# post '/seasons' do
#   query_db "INSERT INTO seasons (name,month,image) VALUES
#   ('#{params[:name]}', '#{params[:month]}' ,'#{params[:image]}')"
#   redirect to('/seasons')
#
# end
# # show
# get '/seasons/:id' do
#   # fetch this season from database
#   # binding.pry
#   @seasons = query_db "SELECT * FROM seasons WHERE id= #{ params[:id] }"
#   @seasons = @seasons.first #stripping away the outer way
#
#   # show this season
#   erb :seasons_show
# end
#
# #edit
# get '/seasons/:id/edit' do
#   @seasons= query_db "SELECT * FROM seasons WHERE id = #{params[:id]}"
#   @seasons = @seasons.first
#   erb :seasons_edit
#   #fetch the butterfly
#   # show in a form
# end
#
#
# #Update
# post '/seasons/:id' do
#   #update the seasons in the Database
#   query_db "UPDATE seasons SET name='#{params[:name] }', month='#{params[:month]}', image='#{params[:image]}'
#   WHERE id=#{params[:id] }"
#
#   redirect to("/seasons/#{ params[:id] }")
#
# end
#
#
#
# #delete
# get '/seasons/:id/delete' do
# query_db "DELETE FROM seasons WHERE id = #{ params[:id] }"
# redirect to('/seasons')
#   #Delete the season
# end
#
# def query_db sql_statement
#   db = SQLite3::Database.new 'database.sqlite3'
#   db.results_as_hash = true
#
# puts sql_statement# optional bonus
#
#   results = db.execute sql_statement
#   db.close
#
#   results
# end
