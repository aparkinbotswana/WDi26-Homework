require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'stock_quote'

get '/' do
  erb :home # HTML file with Embedded Ruby
end

get '/about' do
  erb :about
end

get '/stock' do

  redirect to ('/') if params[:stock_symbol].empty?
  # We have the user's input
  @stock = params[:stock_symbol]

  # Calculate the result
    @result = StockQuote::Stock.quote(@stock).close

  # Display the result
  erb :stock
end

# @info.send ( params[:type].to_sym)
