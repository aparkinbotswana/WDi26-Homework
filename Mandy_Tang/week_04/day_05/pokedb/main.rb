require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'



ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

class Trainer < ActiveRecord::Base
  belongs_to :poke  # Let's never get this mixed up again
end

class Poke < ActiveRecord::Base
  has_many :trainers
end

get '/' do
  erb :home
end

get '/trainers' do
  @trainers = Trainer.all
  erb :trainers_index
end

get '/trainers/new' do
  erb :trainers_new
end

# Create in DB
post '/trainers' do
    trainer = Trainer.new
    trainer.name = params[:name]
    trainer.image = params[:image]
    trainer.poke_id = params[:poke_id]
    trainer.save
    redirect ('/trainers')
end

# Delete
get '/trainers/:id/delete' do
  @trainer = Trainer.find params[:id]
  @trainer.destroy
  redirect to('/trainers')
end

# Edit Form
get '/trainers/:id/edit' do
  @trainer = Trainer.find params[:id]
  erb :trainers_edit
end

# Update DB
post '/trainers/:id' do
  @trainer = Trainer.find params[:id]
  @trainer.name = params[:name]
  @trainer.image = params[:image]
  @trainer.poke_id = params[:poke_id]
  @trainer.save

  redirect to("/trainers/#{params[:id]}")
end

get '/trainers/:id' do
  @trainer = Trainer.find params[:id]
  erb :trainers_show
end

get '/pokes' do
  @pokes = Poke.all
  erb :pokes_index
end

get '/pokes/new' do
  erb :pokes_new
end

post '/pokes' do
  @poke = Poke.new
  @poke.name = params[:name]
  @poke.image = params[:image]
  @poke.pokemon_type = params[:pokemon_type]
  @poke.save

  redirect to('/pokes')
end

get '/pokes/:id' do
  @poke = Poke.find params[:id]
  erb :pokes_show
end

get '/pokes/:id/delete' do
  @poke = Poke.find params[:id]
  @poke.destroy
  redirect to('/pokes')
end

get '/pokes/:id/edit' do
  @poke = Poke.find params[:id]
  erb :pokes_edit
end

post '/pokes/:id' do
  @poke = Poke.find params[:id]
  @poke.name = params[:name]
  @poke.image = params[:image]
  @poke.pokemon_type = params[:pokemon_type]
  @poke.save
  redirect to("/pokes/#{params[:id]}")
end
