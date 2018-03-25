require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'

get '/' do
  erb :home
end

get '/search-results' do

  @book_title = params[:book_title]

  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
  books_data = HTTParty.get(url) # handle errors?

  @books_info = []

  books_data['items'].each do |item|
    @books_info << item["volumeInfo"]
  end

    erb :search_results

end

# get '/book/:title' do
#   @book_title = params[:title].split
#   # url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
#   # @book_info = HTTParty.get(url) # handle errors?
#
#   erb :book_info
#
# end