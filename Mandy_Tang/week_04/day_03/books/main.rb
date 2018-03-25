require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home # find the :home erb = a HTML file with Embedded Ruby.
end

get '/books' do


# Wizardry here to retrieve book cover

@book_title = params[:book_title]
@book_info = params[:book_info]

book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
book_info = HTTParty.get book_url;

@result = book_info["items"][0]["volumeInfo"]["title"]
@author = book_info["items"][0]["volumeInfo"]["authors"][0]
@description = book_info["items"][0]["volumeInfo"]["description"]
@img = book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

#display book info
puts "#{@result}"
puts "#{@author}"
puts "#{@img}"
erb :books
end
