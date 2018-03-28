require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end

get '/lookup' do

  @book_title = params[:book_title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title  }"
  @book_info = HTTParty.get @book_url;
  @thumbnail = @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]

  @description = @book_info["items"].first["volumeInfo"]["description"]

  erb :lookup
end

  
