require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home # HTML file with Embedded Ruby
end

get '/book' do

  @book = params[:book_name]

  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book }"

  @book_data = HTTParty.get(@book_url)
  # HTTParty.get("http://rubygems.org/api/v1/versions/httparty.json")

  # @book_cover = @book_info.keys

  @img_link = @book_data['items'][0]['volumeInfo']['imageLinks']['thumbnail']
  @author_link = @book_data['items'][0]['volumeInfo']['description']
  @desc_link = @book_data['items'][0]['volumeInfo']['description']



  erb :book # HTML file with Embedded Ruby
end
