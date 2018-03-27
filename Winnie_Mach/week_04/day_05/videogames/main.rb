require 'sinatra'
require 'sinatra/reloader'
require 'active_record'
require 'sqlite3'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'videogames.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Game < ActiveRecord::Base
  belongs_to :console
end

class Console < ActiveRecord::Base
  has_many :games
end

########## CONSOLES ##############

get '/' do
  erb :home
end

get '/consoles/new' do
  erb :consoles_new
end

get '/consoles' do
  @console = Console.all
  erb :consoles_index
end

post '/consoles' do
  console = Console.new
  console.name = params[:name] #no Console. because grabbing the data from what the user has entered on the page.
  console.company = params[:company]
  console.image = params[:image]
  console.save
  redirect to('/consoles')
end

get '/consoles/:id' do
  @console = Console.find params[:id]
  erb :consoles_show
end

get '/consoles/:id/delete' do
  @console = Console.find params[:id]
  @console = @console.destroy
  redirect to ('/consoles')
end

get '/consoles/:id/edit' do
  @console = Console.find params[:id]
erb :consoles_edit
end

post '/consoles/:id' do
  console = Console.find params[:id]
  console.name = params[:name]
  console.company = params[:company]
  console.image = params[:image]
  console.save
  redirect to ("/consoles/#{params[:id]}")
end

############ GAMES ###################

get '/games/new' do
  erb :games_new
end

get '/games' do
  @game = Game.all
  erb :games_index
end

post '/games' do
  game = Game.new
  game.name = params[:name]
  game.company = params[:company]
  game.year = params[:year]
  game.image = params[:image]
  game.save
  redirect to('/games')
end

get '/games/:id' do
  @game = Game.find params[:id]
  erb :games_show
end

get '/games/:id/delete' do
  @game = Game.find params[:id]
  @game = @game.destroy
  redirect to ('/games')
end

get '/games/:id/edit' do
  @game = Game.find params[:id]
  erb :games_edit
end

post '/games/:id' do
  game = Game.find params[:id]
  game.name = params[:name]
  game.company = params[:company]
  game.year = params[:year]
  game.image = params[:image]
  game.console_id = params[:console_id]
  game.save
  redirect to ("/games/#{params[:id]}")
end

get '/pry' do
  binding.pry
end
