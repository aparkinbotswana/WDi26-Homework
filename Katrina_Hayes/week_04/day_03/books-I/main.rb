require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/' do
  erb :home
end

get '/result' do
  @book_title = params[:book_title]
  @book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{@book_title}"
  @book_info = HTTParty.get @book_url
  @author = @book_info["items"][0]["volumeInfo"]["authors"].join(', ')
  # @items_list = @book_info["items"]
  # @book_cover_list = []
  # @items_list.each do |item|
  #   @book_cover_list << item["volumeInfo"]["imageLinks"]["thumbnail"]
  # end
  @book_cover = @book_info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @description = @book_info["items"][0]["volumeInfo"]["description"]
  erb :result
end
