require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/books' do
  book_title = params[:books]
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title }"
  @book_info = HTTParty.get book_url;
  @book_cover = @book_info['items'][0]['volumeInfo']['imageLinks']['thumbnail']
  erb :books
end

  # binding.pry
