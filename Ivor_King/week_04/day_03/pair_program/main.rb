require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home # HTML file with Embedded Ruby
end

get '/about' do
  erb :about
end 

get '/getbookcover' do

  @book_title = params[:bookname]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @book_info = HTTParty.get @book_url;
  @book_pic_link = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]

  erb :showpic

end


# CODE DUMP

# [1] pry(main)> require 'httparty'
# => true
# [2] pry(main)> book_title = 'Principia Discordia'
# => "Principia Discordia"
# [3] pry(main)> book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_tit=> "https://www.googleapis.com/books/v1/volumes?q=title:Principia Discordia"
# [4] pry(main)> book_info = HTTParty.get book_url;
# [5] pry(main)> book_info.keys
# => ["kind", "totalItems", "items"]
# [6] pry(main)> 
# [6] pry(main)> 

# book_info.class 
# book_info["items"].first["volumeInfo"]["title"]

# book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title  }"
  
# book_info = HTTParty.get book_url;


# get '/getstock' do
#   redirect to('/') if params[:stockname].empty?

#   @stock_name = params[:stockname]
#   @stock_info = params[:stockinfo]

#   # Metaprogramming
# # @info.send( params[:type].to_sym) 

#   begin
#     @result = StockQuote::Stock.quote( "GOOG" ).send( params[:type].to_sym)
#   rescue
#     redirect to('/')
#   end

#   # calculate result
#   # @result = case params[:operator]
#   # when '+' then @x + @y
#   # when '-' then @x - @y
#   # when '*' then @x * @y
#   # when '/' then @x / @y 
#   # end    

#   erb :getstock

# end


# REFERENCE

# @stock_symbol = 'GOOG' # params[:stock_symbol] from the form

# StockQuote::Stock.quote(@stock_symbol).close
# StockQuote::Stock.quote(@stock_symbol).close

# @stock_symbol = 'FB'
# @last_price = StockQuote::Stock.quote( @stock_symbol ).close

# @last_price = StockQuote::Stock.quote( @stock_symbol )
# - shows everything, all prices
