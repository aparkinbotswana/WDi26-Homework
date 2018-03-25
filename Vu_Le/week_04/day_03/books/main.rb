#https://gist.github.com/wofockham/1f3821464656bf2fb253

require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/bookimg' do

  @book_title = params[:book_title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @book_info = HTTParty.get @book_url;
  @thumbnail = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]


  erb :bookimg
end
