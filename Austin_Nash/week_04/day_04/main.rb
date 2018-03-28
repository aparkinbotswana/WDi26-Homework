require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

#function to be called later - just to simplify code
def query_db(sql_statement)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true

  results = db.execute sql_statement
  db.close
  results
end

#Home Page/landing page
get '/' do
  erb :home
end

#Sports Page - Library - show the list of sports
get '/sports' do
  @sports = query_db 'SELECT * FROM sports'
  erb :sports
end

# Post take in the user input data and then take the user back to sports (list page)
post '/sports' do
  query_db "INSERT INTO sports (sport, players, image) VALUES ('#{params[:sport]}', '#{params[:players]}', '#{params[:image]}')"
  redirect to('/sports')

end

#Add Page - let the user add new sports
get '/sports_add' do
  erb :sports_add
end

#edit an existing sport
get '/sports/:id/edit' do # why /edit?
  @sports = query_db "SELECT * FROM sports WHERE id = #{ params[:id] }"
  @sports = @sports.first
  erb :sports_edit
end

# Update 
post '/sports/:id' do
  query_db "UPDATE sports SET sport='#{ params[:sport] }', players='#{ params[:players] }', image='#{ params[:image] }' WHERE id=#{ params[:id] }"
  redirect to("/sports/#{ params[:id] }")
end

# Show - page to show info of each indiv sport
get '/sports/:id' do
  @sports = query_db "SELECT * FROM sports WHERE id = #{ params[:id] }"
  @sports = @sports.first # Stripping away the outer array
  erb :sports_show
end

# delete - user remove sport from list
get '/sports/:id/delete' do
  query_db "DELETE FROM sports WHERE id = #{ params[:id] }"
  redirect to('/sports')
end
