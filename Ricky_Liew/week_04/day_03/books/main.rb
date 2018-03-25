require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/book' do
  @book_title = params[:book_title].to_s
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title  }"
  book_info = HTTParty.get book_url

  @title = book_info["items"][0]["volumeInfo"]["title"]
  @blurb = book_info["items"][0]["volumeInfo"]["description"]
  @cover_image = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :book
end
#binding.pry
