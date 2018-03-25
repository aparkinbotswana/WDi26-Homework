require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'HTTParty'

get '/' do
  erb :home
end

get '/book' do
  redirect to ('/') if params[:book_title].empty?

  @book_title = params[:book_title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title  }"
  @book_info = HTTParty.get @book_url
  redirect to ('/') if @book_info.nil?
  #
  @book_image_url = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @authors = @book_info["items"][0]["volumeInfo"]["authors"].join("")
  @publish_date = @book_info["items"][0]["volumeInfo"]["publishedDate"]
  @description = @book_info["items"][0]["volumeInfo"]["description"]

  erb :book
end



#
