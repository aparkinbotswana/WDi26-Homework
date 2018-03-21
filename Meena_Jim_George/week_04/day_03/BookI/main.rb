require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home # HTML file with Embedded Ruby

end



get '/books' do
@book = params[:book_title]
@book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book}"
@book_info = HTTParty.get(@book_url)
@book_cover = @book_info["items"].first["volumeInfo"]["imageLinks"]["thumbnail"]
@book_author = @book_info["items"].first["volumeInfo"]["authors"][0]
@book_publisher = @book_info["items"][1]["volumeInfo"]["publisher"]
@book_country = @book_info["items"][1]["saleInfo"]["country"]


erb :books
end
