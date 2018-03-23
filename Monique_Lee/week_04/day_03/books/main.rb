# Books I
# Specification
# Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.
#
# Sample URL
# https://www.googleapis.com/books/v1/volumes?q=title:Ulysses
#
# Additional Resources
# Dynamic URLs in Sinatra
# Google Books Search API
# HTTParty Tutorial

require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home # HTML file with Embedded Ruby
end

#convention over configuration

# get '/about' do
#   erb :about
# end

get '/home' do
  erb :home
end

get '/book' do

  redirect to ('/') if params[:book_title].empty? #sending user back to home

  # eg. book_title = 'Jaws' # params[:book_title]

  @book_title = params[:book_title]
  #links to 'name' of input in form on the home page

  book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title  }"
  # eg. => "https://www.googleapis.com/books/v1/volumes?q=title:Jaws"

  @book_info = HTTParty.get book_url

  redirect to ('/') if @book_info.nil? #sending user back to home

 # @book_cover = @book_info["items"][1].[volumeInfo].imageLinks.thumbnail #change first to pick up thumbnail pic

  @book_cover = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"] #change first to pick up thumbnail pic

 # to reference JSON object in Ruby can use - parsed_json = ActiveSupport::JSON.decode(your_json_string)


  #could use HTML5 to stop from proceeding if form not completed?

  # TO STOP CRASH - ANOTHER APPROACH IS BEGIN RESCUE BLOCK after @stock_symbol = params[:stock_symbol]
  # begin
  #   @last_price = StockQuote::Stock.quote(@stock_symbol).close
  # rescue
  #   redirect to ('/') or erb :failure or return 'message'
  # end

  #select options instead of using form to enter stock_symbol
  # @info.send( params[:type].to_sym ) #Metaprogramming
  # or use case statement => when 'last' then @info.last

  erb :book

  end

  # binding.pry
