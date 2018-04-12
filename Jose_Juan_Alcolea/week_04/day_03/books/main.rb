require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home  # HTML file with   Embedded ruby
end


get '/about' do
  erb :about
end

get '/books' do
  @book_title = params[:books]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @book_info = HTTParty.get book_url;
  @thumb = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :books
end
