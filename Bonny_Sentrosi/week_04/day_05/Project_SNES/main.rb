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

class Game < ActiveRecord::Base
  belongs_to :developer # i.e. THERE WILL BE A developer_id COLUMN IN THE snes TABLE
end

class Developer < ActiveRecord::Base
  has_many :snes
end

get '/' do
  erb :home
end

# Index
get '/snes' do
  @snes = Game.all
  erb :snes_index
end

# New
get '/snes/new' do
  erb :snes_new
end

# Create
post '/snes' do
  game = Game.new
  game.name = params[:name]
  game.year = params[:year]
  game.video = params[:video]
  game.image = params[:image]
  game.developer_id = params[:developer_id]
  game.save
  redirect to('/snes') # GET request
end

# Show
get '/snes/:id' do
  @game = Game.find params[:id]
  erb :snes_show
end

# Edit
get '/snes/:id/edit' do
  @game = Game.find params[:id]
  erb :snes_edit
end

# Update
post '/snes/:id' do
  game = Game.find params[:id]
  game.name = params[:name]
  game.year = params[:year]
  game.video = params[:video]
  game.image = params[:image]
  game.developer_id = params[:developer_id]
  game.save
  redirect to("/snes/#{ params[:id] }") # GET request
end

# Delete
get '/snes/:id/delete' do
  game = Game.find params[:id]
  game.destroy
  redirect to('/snes')
end

# Index
get '/developers' do
  @developers = Developer.all
  erb :developers_index
end

# New
get '/developers/new' do
  erb :developers_new
end

# Create
post '/developers' do
  developer = Developer.new
  developer.name = params[:name]
  developer.image = params[:image]
  developer.country = params[:country]
  developer.save
  redirect to("/developers/#{ developer.id }")
end

# Show
get '/developers/:id' do
  @developer = Developer.find params[:id]
  erb :developers_show
end

# Edit
get '/developers/:id/edit' do
  @developer = Developer.find params[:id]
  erb :developers_edit
end

# Update
post '/developers/:id' do
  developer = Developer.find params[:id]
  developer.name = params[:name]
  developer.image = params[:image]
  developer.country = params[:country]
  developer.save
  redirect to("/developers/#{ developer.id }") # GET request
end

# Delete
get '/developers/:id/delete' do
  developer = Developer.find params[:id]
  developer.destroy
  redirect to("/developers")
end

# Secret
# get '/pry' do
#   binding.pry
# end

after do
  ActiveRecord::Base.connection.close
end
