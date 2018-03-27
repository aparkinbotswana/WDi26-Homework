require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end


get '/books' do
  @book_title = params[:book_title]
  @book_info = HTTParty.get book_url;
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}";
  @title = @book_info["items"][0]["volumeInfo"]["title"]
  @author = @book_info["items"][0]["volumeInfo"]["authors"]
  @image = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description = @book_info["items"][0]["volumeInfo"]["description"]

  redirect to ('/') if @book_info.nil?
  redirect to ('/') if params[:book_title].empty?

  erb :books

end
