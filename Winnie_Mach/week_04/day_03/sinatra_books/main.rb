# https://gist.github.com/wofockham/1f3821464656bf2fb253
#
# Books I
# Specification
# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.
#
# Sample URL
# https://www.googleapis.com/books/v1/volumes?q=title:Ulysses
#
# Additional Resources
# Dynamic URLs in Sinatra
# Google Books Search API
# HTTParty Tutorial
#
# ####################
#
# Pair Programming Bot
# Recreate this site using Sinatra:
#
# http://pairprogrammingbot.herokuapp.com/
#
# You can try to match/steal the existing style or create your own.

require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/about' do

  @book_name = params[:book_name]
  redirect to '/' if @book_name.nil?
  redirect to '/' if @book_name.empty?

  @book_url = "https://www.googleapis.com/books/v1/volumes?q=#{@book_name}"
  @book_info = HTTParty.get @book_url;
  @book_image = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"] ##returns thumbnail of book Cover
  @book_description = @book_info["items"][0]["volumeInfo"]["description"]

  erb :about
#binding.pry
end
