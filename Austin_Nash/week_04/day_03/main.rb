require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/info' do
  @picture = "Austin"
  @book_title = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title  }"
  # @book_info = HTTParty.get title
  # @picture = params[:book_picture]
  erb :info
end
