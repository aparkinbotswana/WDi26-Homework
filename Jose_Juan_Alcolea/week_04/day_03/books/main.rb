require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home  # HTML file with   Embedded ruby
end


get '/about' do
  erb :about
end

get '/books' do


@book_title = params[:books]


book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
@book_info = HTTParty.get book_url;
# @thumb = @book_info["items"][0]["volumeInfo"]
@thumb = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
#binding.pry




  #tengo que definir aqui que es lo que hace la form cuando se pulsa el boton
# @book_url = GoogleBooks::API.search('title')
# @book_url = GoogleBooks::API.search('https://www.googleapis.com/books/v1/volumes?q={title}')
# binding.pry

erb :books

  # @thumbnail = GoogleBooks::API.search('https://www.googleapis.com/books/v1/volumes?q={title}')
  # @thumbnail = GoogleBooks.search("The Great Gatsby").first
end


  #
  # @book_title =
  # @book_url =
  # @book_info =
#https://www.googleapis.com/books/v1/volumes?q={search terms}

  # @stock_symbol = params[:stock]

  # @price = StockQuote::Stock.quote(@stock_symbol).close
