require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

# Index
get '/board_games' do
  @board_games = query_db "SELECT * FROM board_games"
  erb :index
end

# New
get '/board_games/new' do
  erb :new
end

# Create
post '/board_games' do
  query_db "INSERT INTO board_games (gname, gtype, gscore, gimage) VALUES ('#{params[:gname]}', '#{params[:gtype]}', '#{params[:gscore]}', '#{params[:gimage]}')"
  redirect to('/board_games') # GET request
end

# Show
get '/board_games/:id' do
  @board_game = query_db "SELECT * FROM board_games WHERE id = #{ params[:id] }"
  @board_game = @board_game.first # Stripping away the outer array
  erb :show
end

# Edit
get '/board_games/:id/edit' do
  @board_game = query_db "SELECT * FROM board_games WHERE id = #{ params[:id] }"
  @board_game = @board_game.first # Stripping away the outer array
  erb :edit
end

# Update
post '/board_games/:id' do
  query_db "UPDATE board_games SET gname='#{ params[:gname] }', gtype='#{ params[:gtype] }', score='#{ params[:gscore] }', gimage='#{ params[:gimage] }' WHERE id=#{ params[:id] }"
  redirect to("/board_games/#{ params[:id] }") # GET request
end

# Delete
get '/board_games/:id/delete' do
  query_db "DELETE FROM board_games WHERE id = #{ params[:id] }"
  redirect to('/board_games')
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement # Optional bonus

  results = db.execute sql_statement
  db.close
  results
end
