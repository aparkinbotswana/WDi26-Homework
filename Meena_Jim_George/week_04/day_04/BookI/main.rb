require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home # HTML file with Embedded Ruby

end



get '/books' do
# redirect to('/') if params[:book_title].nil?# redirect to home pge if stock symbol is empty
@book = params[:book_title]
@url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book}";
@getimage = HTTParty.get(@url)

# @stock_symbol = params[:stock_symbol]
# @info = StockQuote::Stock.quote(@stock_symbol)
# redirect to ('/') if @info.nil?
# @last_price = @info.close
# @thumbnail = params[:thumbnail]
erb :books
end
