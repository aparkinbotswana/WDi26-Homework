require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
  belongs_to :author
end

class Author < ActiveRecord::Base
  has_many :books
end

get '/' do
  erb :home
end

#Index
get '/books' do
  @books = Book.all
  erb :books_index
end
#New
get '/books/new' do
  erb :books_new
end
#Create
post '/books' do
  book = Book.new
  book.name = params[:name]
  book.published = params[:published]
  book.book_cover = params[:book_cover]
  book.author_id = params[:author_id]
  book.save
  redirect to ('/books')
end
#show
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end
#Edit
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

#Update
post '/books/:id' do
book = Book.find params[:id]
book.name = params[:name]
book.published = params[:published]
book.book_cover = params[:book_cover]
book.author_id = params[:author_id]
book.save

redirect to ("/books/#{params[:id]}")
end

#delete
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to ('/books')
end

# *************************************
get '/authors' do
  @authors = Author.all
  erb :authors_index
end

#New
get '/authors/new' do
  erb :authors_new
end

#Create
post '/authors' do
  author = Author.new
  author.name = params[:name]
  author.image= params[:image]
  author.save
  # redirect to ('/authors')
  redirect to ("/authors/#{author.id}")
end

#show
get '/authors/:id' do
  @author = Author.find params[:id]
  erb :authors_show
end

#edit
get '/authors/:id/edit' do
  @author = Author.find params[:id]
  erb :authors_edit
end

#update
post '/authors/:id' do
author = Author.find params[:id]
author.name = params[:name]
author.image = params[:image]
author.save
redirect to ("/authors/#{author.id}")
end

#delete
get '/authors/:id/delete' do
author = Author.find params[:id]
author.destroy
redirect to ('/authors')
end


get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
