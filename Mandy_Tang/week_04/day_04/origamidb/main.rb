require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

get '/' do
  erb :home
end

get '/designs' do
  @origami = query_db "SELECT * FROM origami"
  # Fetch the info from all the designs AND put it in the global origami variable (note we aren't displaying anything in this step)

  erb :designs_index
end


get '/designs/new' do
  erb :designs_new
end


get '/designs/:id' do
  @design = query_db "SELECT * FROM origami WHERE id=#{params[:id]}"
  @design = @design.first

  erb :designs_show
end

get '/designs/:id/delete' do
  query_db "DELETE FROM origami WHERE id=#{params[:id]}"
  redirect to ("/designs")
end

post '/designs' do
  query_db "INSERT INTO origami (name, creator, image) VALUES ('#{params[:name]}', '#{params[:creator]}', '#{params[:image]}')"
  redirect to ("/designs")
end

get '/designs/:id/edit' do
@design = query_db "SELECT * FROM origami WHERE id=#{params[:id]}"
@design = @design.first
  erb :designs_edit
end

post '/designs/:id' do
  query_db "UPDATE origami SET name='#{params[:name]}',  creator='#{params[:creator]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  redirect to("/designs/#{params[:id]}") # Parentheses are required because redirect to is actually a function, so it takes an argument (the URL). It is different to the first line in this code block, which is a pattern, not an actualy URL
end

def query_db(sql_statement) # To avoid needing to establish database connection in every code block
  db = SQLite3::Database.new 'database.sqlite3' # Establish new connection to database
  db.results_as_hash = true
  puts sql_statement # Show the sql_statement in terminal so you can see what you're doing
  results = db.execute sql_statement
  db.close # Close connection to database, since you can only have a certain number of connections at once
  results # Return results
end
