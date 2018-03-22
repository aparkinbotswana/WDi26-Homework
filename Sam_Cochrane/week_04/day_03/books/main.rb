require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :home
end


get '/book' do

  redirect to('/') if params[:book_title].empty? #sending to home page

    book_title = params[:book_title]

    book_url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ book_title }"

book_info = HTTParty.get book_url

    book_info.class

    book_info.keys
binding.pry

    # in volume info for picture

    book_info ["items"].first['volumeInfo']["title"]

  redirect to ('/') if @book_info.nil?

  erb :book

end
