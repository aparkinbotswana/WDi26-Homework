require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'
require 'pry'

# Rails will do this for, but in the meanwhile:
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional but very nice to have
ActiveRecord::Base.logger = Logger.new(STDERR)

class Book < ActiveRecord::Base
  belongs_to :category # i.e. THERE WILL BE A plant_id COLUMN IN THE butterflies TABLE
end

class Category < ActiveRecord::Base
  has_many :books
end

get '/' do
  erb :home
end

# Index
get '/books' do
  @books = Book.all
  erb :books_index
end

# New
get '/books/new' do
  erb :books_new
end

# Create
post '/books' do
  book = Book.new
  book.title = params[:title]
  book.author = params[:author]
  book.image = params[:image]
  book.category_id = params[:category_id]
  book.save
  redirect to('/books') # GET request
end

# Show
get '/books/:id' do
  @book = Book.find params[:id]
  erb :books_show
end

# Edit
get '/books/:id/edit' do
  @book = Book.find params[:id]
  erb :books_edit
end

# Update
post '/books/:id' do
  book = Book.find params[:id]
  book.title = params[:title]
  book.author = params[:author]
  # book.image = params[:image]
  # book.category_id = params[:category_id]
  book.save
  redirect to("/books/#{ params[:id] }") # GET request
end

# Delete
get '/books/:id/delete' do
  book = Book.find params[:id]
  book.destroy
  redirect to('/books')
end

# # Index
# get '/plants' do
#   @plants = Plant.all
#   erb :plants_index
# end
#
# # New
# get '/plants/new' do
#   erb :plants_new
# end
#
# # Create
# post '/plants' do
#   plant = Plant.new
#   plant.name = params[:name]
#   plant.image = params[:image]
#   plant.save
#   redirect to("/plants/#{ plant.id }")
# end
#
# # Show
# get '/plants/:id' do
#   @plant = Plant.find params[:id]
#   erb :plants_show
# end
#
# # Edit
# get '/plants/:id/edit' do
#   @plant = Plant.find params[:id]
#   erb :plants_edit
# end
#
# # Update
# post '/plants/:id' do
#   plant = Plant.find params[:id]
#   plant.name = params[:name]
#   plant.image = params[:image]
#   plant.save
#   redirect to("/plants/#{ plant.id }") # GET request
# end
#
# # Delete
# get '/plants/:id/delete' do
#   plant = Plant.find params[:id]
#   plant.destroy
#   redirect to("/plants")
# end

# Secret
get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
