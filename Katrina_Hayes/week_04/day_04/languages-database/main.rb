require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'

# Home page
get '/' do
  erb :home
end

# Index page - list of all languages in the site
get '/languages' do
  @languages = query_db 'SELECT * FROM languages'  # our database is our API in this instance...
  erb :languages_index
end

# Add new language
get '/languages/new' do
  erb :languages_new
end

# Create - the create action. action user is taking, is creating a new language on the server
post '/language' do
  query_db "INSERT INTO languages (name, nativeName, family, livingDead, map) VALUES ('#{params[:name]}', '#{params[:nativeName]}', '#{params[:family]}', '#{params[:livingDead]}', '#{params[:map]}')"
  # what to do once language is created
  redirect to('/languages') # user will see their language at bottom of list
end

# Show page (shows you an individual item from the list)
get '/languages/:id' do
  # fetch the language
  @language = query_db "SELECT * FROM languages WHERE id=#{params[:id]}"
  @language = @language.first # strip away the outer array
  # show this language
  erb :languages_show
end

# Edit
get '/languages/:id/edit' do
  # Fetch the language
  @language = query_db "SELECT * FROM languages WHERE id=#{params[:id]}"
  @language = @language.first # strip away the outer array
  # show that language in a form that user can update
  erb :languages_edit
end

# Update
post '/languages/:id' do
 # update the language in the database
 query_db "UPDATE languages SET name='#{params[:name]}', nativeName='#{params[:nativeName]}', family='#{params[:family]}', livingDead='#{params[:livingDead]}', map='#{params[:map]}' WHERE id=#{params[:id]}"
 # redirect to the show page for that language
 redirect to("/languages/#{params[:id]}") # all redirects are get requests
end

# Delete
get '/languages/:id/delete' do
  # Delete the language
  ### NOTE: to test this before running it, just run it in interactive sqlite3 in iterms without query_db
  query_db "DELETE FROM languages WHERE id = #{params[:id]}"
  # Redirect to Index
  redirect to('/languages')
end

def query_db(sql_statement)
  #open the connection to the database (max 1024 connections at a time)
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  puts sql_statement # we will see this in the CLI. optional line
  # execute what we ask for in our sql statement
  results = db.execute sql_statement
  # close the connection to the database (in case of topping 1024 users opening a request by requesting pages)
  db.close
  results
end
