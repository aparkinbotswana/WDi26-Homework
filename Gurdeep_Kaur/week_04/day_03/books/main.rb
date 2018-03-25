require 'sinatra'
require 'sinatra/reloader'
require 'stock_quote'

get '/' do
  erb :home # HTML file with embedded ruby
end


get '/book' do
  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:jaws"
  @book_info = HTTParty.get book_url;
  @book_cover = @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
  # @book_author = @book_info

  erb :book
end
