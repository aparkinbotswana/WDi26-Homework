require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this for, but in the meanwhile:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional but very nice to have
ActiveRecord::Base.logger = Logger.new(STDERR)

class Record < ActiveRecord::Base
  belongs_to :genre # i.e THERE WILL BE A genre_id COLUMN in the records table
end

class Genre < ActiveRecord::Base
  has_many :records
end


get '/' do
  erb :home
end

# Index
get '/records' do
  @records = Record.all
  erb :records_index
end

# New
get '/records/new' do
  erb :records_new
end

# Create
post '/records' do
  record = Record.new
  record.title = params[:title]
  record.artist = params[:artist]
  record.image = params[:image]
  record.genre_id = params[:genre_id]
  record.save
  redirect to('/records') # GET request
end

# Show
get '/records/:id' do
  @record = Record.find params[:id]
  erb :records_show
end

# Edit
get '/records/:id/edit' do
  @record = Record.find params[:id]
  erb :records_edit
end

# Update
post '/records/:id' do
  record = Record.find params[:id]
  record.title = params[:title]
  record.artist = params[:artist]
  record.image = params[:image]
  record.genre_id = params[:genre_id]
  record.save
  redirect to("/records/#{ params[:id] }") # GET request
end

# Delete
get '/records/:id/delete' do
  record = Record.find params[:id]
  record.destroy
  redirect to('/records')
end

# Index
get '/genres' do
  @genres = Genre.all
  erb :genres_index
end

# New
get '/genres/new' do
  erb :genres_new
end

# Create
post '/genres' do
  genre = Genre.new
  genre.genre = params[:genre]
  genre.image = params[:image]
  genre.save
  redirect to("/genres/#{ genre.id }")
end

# Show
get '/genres/:id' do
  @genre = Genre.find params[:id]
  erb :genres_show
end

# Edit
get '/genres/:id/edit' do
  @genre = Genre.find params[:id]
  erb :genres_edit
end

# Update
post '/genres/:id' do
  genre = Genre.find params[:id]
  genre.genre = params[:genre]
  genre.image = params[:image]
  genre.save
  redirect to("/genres/#{ genre.id }") # GET request
end

# Delete
get '/genres/:id/delete' do
  genre = Genre.find params[:id]
  genre.destroy
  redirect to("/genres")
end

# Secret
get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
