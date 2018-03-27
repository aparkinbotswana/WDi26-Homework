require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord:: Base.establish_connection(
  :adapter =>'sqlite3',
  :database =>'database.sqlite3'
)
ActiveRecord::Base.logger = Logger.new(STDERR)
# class sibnle name and table plural name - it will find itself
class Show < ActiveRecord::Base
  belongs_to :channel
end
# link show to one channel
#there is a channel_id column in the shows TABLE
class Channel < ActiveRecord::Base
  has_many :shows
end
#home page
get '/' do
  erb :home
end
#to disp all shows
get '/shows' do
  @shows = Show.all

  erb :shows_index

end

get '/shows/new' do

  erb :shows_new
end
# post show - to insert
post '/shows' do
  show = Show.new
  show.name = params[:name]
  show.showtype = params[:showtype]
  show.image= params[:image]
  show.channel_id = params[:channel_id]
  show.save
  redirect to('/shows')
end

get '/shows/:id' do
  @show = Show.find params[:id]
  erb :shows_show

end

post '/shows/:id' do

  show = Show.find params[:id]
  show.name = params[:name]
  show.showtype = params[:showtype]
  show.image= params[:image]
  show.channel_id= params[:channel_id]
  show.save
  redirect to ("/shows/#{params[:id]}")

end

get '/shows/:id/edit' do
  @show = Show.find params[:id]
  erb :shows_edit

end

get '/shows/:id/delete' do
  show = Show.find params[:id]
  show.destroy
  redirect to ('/shows')
end

###########Channels


get '/channels' do
  @channels = Channel.all

  erb :channels_index

end

get '/channels/new' do

  erb :channels_new
end
# post show - to insert
post '/channels' do
  channel = Channel.new
  channel.name = params[:name]
  channel.image= params[:image]
  channel.save
  redirect to('/channels')
end

get '/channels/:id' do
  @channel = Channel.find params[:id]
  erb :channels_show

end

post '/channels/:id' do

  channel = Channel.find params[:id]
  channel.name  = params[:name]
  channel.image = params[:image]
  channel.save
  redirect to ("/channels/#{params[:id]}")

end

get '/channels/:id/edit' do
  @channel = Channel.find params[:id]
  erb :channels_edit

end

get '/channels/:id/delete' do
  channel = Channel.find params[:id]
  channel.destroy
  redirect to ('/channels')
end
