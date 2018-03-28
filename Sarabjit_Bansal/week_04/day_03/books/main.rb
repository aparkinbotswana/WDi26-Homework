
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/srch' do

redirect to ('/') if params[:book_title].empty?
booktitle = params[:book_title]

# @response1 =
#   HTTParty.get("https://www.googleapis.com/books/v1/volumes?q=title:#{ booktitle }")

  response1 ="https://www.googleapis.com/books/v1/volumes?q=title:#{ booktitle }"
  @book_info = HTTParty.get response1;
  @title1 = @book_info["items"][0]["volumeInfo"]["title"]
  @description1 = @book_info["items"][0]["volumeInfo"]["description"]
  @image1 = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  # binding.pry
 # get the book name
 # get the params image or desc
 # store in var
 #call erb
  erb :srch
end



# @info= StockQuote::Stock.quote(@stock_symbol)
# redirect to ('/') if @info.nil?
# @last_price =@info.close
