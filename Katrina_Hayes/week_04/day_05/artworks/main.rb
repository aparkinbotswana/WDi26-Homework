require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  adapter: 'sqlite3',
  database: 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Artwork < ActiveRecord::Base
  belongs_to :artist
end

class Artist < ActiveRecord::Base
  has_many :artworks
end

# Home
get '/' do
  @artworks = Artwork.all
  erb :home
end

# Index - artworks
get '/artworks' do
  @artworks = Artwork.all
  erb :artworks_index
end

# Index - artists
get '/artists' do
  @artists = Artist.all
  erb :artists_index
end

# New - artwork
get '/artworks/new' do
  erb :artworks_new
end

# New - artist
get '/artists/new' do
  erb :artists_new
end

# Create - artwork
post '/artworks' do
  artwork = Artwork.new
  artwork.name = params[:name]
  artwork.year = params[:year]
  artwork.image = params[:image]
  artwork.artist_id = params[:artist_id]
  artwork.save
  redirect to("/artworks/#{artwork.id}")
end

# Create - artist
post '/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.year_of_birth = params[:year_of_birth]
  artist.nationality = params[:nationality]
  artist.image = params[:image]
  artist.save
  redirect to("/artists/#{artist.id}")
end

# Show - artwork
get '/artworks/:id' do
  @artwork = Artwork.find params[:id]
  erb :artworks_show
end

# Show - artist
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_show
end

# Edit - artwork
get '/artworks/:id/edit' do
  @artwork = Artwork.find params[:id]
  erb :artworks_edit
end

# Edit - artist
get '/artists/:id/edit' do
  @artist = Artist.find params[:id]
  erb :artists_edit
end

# Update - artwork
post '/artworks/:id' do
  artwork = Artwork.find params[:id]
  artwork.name = params[:name]
  artwork.year = params[:year]
  artwork.image = params[:image]
  artwork.artist_id = params[:artist_id]
  artwork.save
  redirect to("/artworks/#{artwork.id}")
end

# Update - artist
post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.year_of_birth = params[:year_of_birth]
  artist.nationality = params[:nationality]
  artist.image = params[:image]
  artist.save
  redirect to("/artists/#{artist.id}")
end

# Delete - artwork
get '/artworks/:id/delete' do
  artwork = Artwork.find params[:id]
  artwork.destroy
  redirect to ('/artworks')
end

# Delete - artist
get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to ('/artists')
end

# Secret
get '/pry' do
  binding.pry
end

# Close connection after each time some code above is run
after do
  ActiveRecord::Base.connection.close
end
