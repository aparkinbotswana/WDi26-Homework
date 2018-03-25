require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'



get '/' do
  erb :home # HTML file with Embedded Ruby
end

get '/book' do

  @book_title = params[:book_title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
  @book_info = HTTParty.get @book_url
  @image_url = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @ratings = @book_info["items"][0]["volumeInfo"]["averageRating"]
  @description = @book_info["items"][0]["volumeInfo"]["description"]


  erb :book
end
