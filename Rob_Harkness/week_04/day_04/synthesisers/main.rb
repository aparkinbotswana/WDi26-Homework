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

###### ROUTES ##############################
#
################## INDEX ######################

get '/' do
  @synths = query_db 'SELECT * FROM synthesisers'

  erb :home
end

############## CREATE ##########################

get '/new' do

  erb :new_synth
end

post '/' do

  query_db "INSERT INTO synthesisers (model, make, type, year, image) VALUES ('#{params['model']}', '#{params['make']}', '#{params['type']}', '#{params['year']}', '#{params['image']}')"

  redirect to('/')
end

################ SHOW #########################

get '/:id' do
  @synth = query_db "SELECT * FROM synthesisers WHERE id=#{params[:id]}"
  @synth = @synth.first
  erb :show_synth
end

############## EDIT ########################
#

get '/:id/edit' do
  @synth = query_db "SELECT * FROM synthesisers WHERE id=#{params[:id]}"
  @synth = @synth.first

  erb :edit_synth
end

############### UPDATE ############################
post '/:id' do
  query_db "UPDATE synthesisers SET model='#{params['model']}', make='#{params['make']}', type='#{params['type']}', year='#{params['year']}', image='#{params['image']}' WHERE id=#{params['id']}"
  redirect to("/#{params['id']}")
end

############### DELETE ########################

get '/:id/delete' do
  query_db "DELETE FROM synthesisers WHERE id = #{params[:id]}"

  redirect to('/')

end