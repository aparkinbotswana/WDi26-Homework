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
