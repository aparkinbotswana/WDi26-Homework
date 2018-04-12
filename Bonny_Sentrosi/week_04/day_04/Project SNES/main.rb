require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

#Index

get '/snes' do
  @snes = query_db 'SELECT * FROM snes'
  erb :snes_index
  #
  # @snes.to_s
end

#New
get '/snes/new' do
  erb :snes_new
end
#CREATE

post '/snes' do
  query_db "INSERT INTO snes (name, producer, year, image, video) VALUES ('#{params[:name]}', '#{ params[:producer]}', '#{ params[:year]}', '#{ params[:image]}', '#{ params[:video]}')"
  redirect to ('/snes') # redirect is a GET request
end

#show
get '/snes/:id' do
  @game = query_db "SELECT * FROM snes WHERE id = #{ params[:id]}"
  @game = @game.first #stripping away the outer array
  #show this game
  # @game.inspect # .to_s
  erb :snes_show
end

#edit
get '/snes/:id/edit' do
    #fetch game
    @game = query_db "SELECT * FROM snes WHERE id = #{ params[:id] }"
    #show butterly in a form
    @game = @game.first
    erb :snes_edit
end

#update
post '/snes/:id' do
  query_db "UPDATE snes SET name='#{ params[:name] }', producer='#{ params[:producer] }', year='#{ params[:year] }', image='#{ params[:image] }', video='#{ params[:video] }' WHERE id=#{ params[:id] }"
  redirect to("/snes/#{ params[:id] }") # GET request
end



#Delete
get '/snes/:id/delete' do
  query_db "DELETE FROM snes WHERE id = #{ params[:id] }"
  #delete game
  redirect to('/snes')
  #Redirect to the index
end

def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  puts sql_statement # optional bonus to see whats happening in console

  results = db.execute sql_statement
  db.close
  results
end
