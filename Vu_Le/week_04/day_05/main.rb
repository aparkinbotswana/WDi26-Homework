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

class Player < ActiveRecord::Base
  belongs_to :team
end

class Team < ActiveRecord::Base
  has_many :players
end

get '/' do
  erb :home
end

# Index
get '/players' do
  @players = Player.all
  erb :players_index
end

# New
get '/players/new' do
  erb :players_new
end

# Create
post '/players' do
  player = Player.new
  player.name = params[:name]
  player.position = params[:position]
  player.image = params[:image]
  player.team_id = params[:team_id]
  player.save
  redirect to('/players') # GET request
end

# Show
get '/players/:id' do
  @player = Player.find params[:id]
  erb :players_show
end

# Edit
get '/players/:id/edit' do
  @player = Player.find params[:id]
  erb :players_edit
end

# Update
post '/players/:id' do
  player = Player.find params[:id]
  player.name = params[:name]
  player.position = params[:position]
  player.image = params[:image]
  player.team_id = params[:team_id]
  player.save
  redirect to("/players/#{ params[:id] }") # GET request
end

# Delete
get '/players/:id/delete' do
  player = Player.find params[:id]
  player.destroy
  redirect to('/players')
end

# Index
get '/teams' do
  @teams = Team.all
  erb :teams_index
end

# New
get '/teams/new' do
  erb :teams_new
end

# Create
post '/teams' do
  team = Team.new
  team.name = params[:name]
  team.image = params[:image]
  team.save
  redirect to("/teams/#{ team.id }")
end

# Show
get '/teams/:id' do
  @team = Team.find params[:id]
  erb :teams_show
end

# Edit
get '/teams/:id/edit' do
  @team = Team.find params[:id]
  erb :teams_edit
end

# Update
post '/teams/:id' do
  team = Team.find params[:id]
  team.name = params[:name]
  team.image = params[:image]
  team.save
  redirect to("/teams/#{ team.id }") # GET request
end

# Delete
get '/teams/:id/delete' do
  team = Team.find params[:id]
  team.destroy
  redirect to("/teams")
end

after do
  ActiveRecord::Base.connection.close
end
