require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb:home
end

get '/picture' do

@cover = params[:cover]
@url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@cover}"
@database = HTTParty.get @url

@image = @database['items'].first['volumeInfo']['imageLinks']['thumbnail']
@title = @database['items'].first['volumeInfo']['title']
@author = @database['items'].first['volumeInfo']['authors']
@publisher = @database['items'].first['volumeInfo']['publisher']

  erb:picture
end
