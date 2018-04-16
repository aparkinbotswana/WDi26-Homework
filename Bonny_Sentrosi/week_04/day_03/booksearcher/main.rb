require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'


get '/' do
  erb :home
end

get '/booksearcher' do
  # redirect to ('/') if params[:title].empty?

  binding.pry

  @title = params[:title]
  @url = book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @title  }"
  book_info = HTTParty.get @url

erb :booksearcher
end





#
# book_info.class
# book_info["items"]

# @result = case params[:book_title]
