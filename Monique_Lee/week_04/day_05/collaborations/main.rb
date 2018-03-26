require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Artist < ActiveRecord::Base
  belongs_to :song # there is a song_id in the artists table
end

class Song < ActiveRecord::Base
  has_many :artists
end

get '/' do
  erb :home
end

##### ARTISTS #####

#INDEX
get '/artists' do
  @artists = Artist.all
  erb :artists_index
end

#NEW
get '/artists/new' do
  erb :artists_new
end

# CREATE
post '/artists' do
  artist = Artist.new
  artist.name = params[:name]
  artist.website = params[:website]
  artist.image = params[:image]
  artist.song_id = params[:song_id]
  artist.save
  redirect to('/artists') #gets artists index page # redirect to('/artists/#{artist.id}') #gets artist page
end

#SHOW
get '/artists/:id' do
  @artist = Artist.find params[:id]
  erb :artists_show
end

# EDIT
get '/artists/:id/edit' do
  @artist = Artist.find params[:id]
  erb :artists_edit
end

#UPDATE
post '/artists/:id' do
  artist = Artist.find params[:id]
  artist.name = params[:name]
  artist.website = params[:website]
  artist.image = params[:image]
  artist.song_id = params[:song_id]
  artist.save
  redirect to("/artists/#{ params[:id] }")
end

#DELETE
get '/artists/:id/delete' do
  artist = Artist.find params[:id]
  artist.destroy
  redirect to('/artists')
end


##### SONGS #####

#INDEX
get '/songs' do
  @songs = Song.all
  erb :songs_index
end

#NEW
get '/songs/new' do
  erb :songs_new
end

# CREATE
post '/songs' do
  song = Song.new
  song.name = params[:name]
  song.genre = params[:genre]
  song.released = params[:released]
  song.company = params[:company]
  song.clip = params[:clip]
  song.save
  redirect to('/songs') #gets song index page # redirect to('/songs/#{song.id}') #gets song page
end

#SHOW
get '/songs/:id' do
  @song = Song.find params[:id]
  erb :songs_show
end

# EDIT
get '/songs/:id/edit' do
  @song = Song.find params[:id]
  erb :songs_edit
end

#UPDATE
post '/songs/:id' do
  song = Song.find params[:id]
  song.name = params[:name]
  song.genre = params[:genre]
  song.released = params[:released]
  song.company = params[:company]
  song.clip = params[:clip]
  song.save
  redirect to("/songs/#{ params[:id] }") #gets song page
end

# DELETE
get '/songs/:id/delete' do
  song = Song.find params[:id]
  song.destroy
  redirect to("/songs")
end

############

after do
  ActiveRecord::Base.connection.close
end
