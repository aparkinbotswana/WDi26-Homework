require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'pry'
require 'active_record'

ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)

class Confectionery < ActiveRecord::Base
  belongs_to :category
end

class Category < ActiveRecord::Base
  has_many :confectioneries
end

get '/' do
  erb :home
end

# Index
get '/confectioneries' do
  @confectioneries = Confectionery.all
  erb :confectioneries_index
end

# New
get '/confectioneries/new' do
  erb :confectioneries_new
end

# Create
post '/confectioneries' do
  confectionery = Confectionery.new
  confectionery.name = params[:name]
  confectionery.category_id = params[:category_id]
  confectionery.image = params[:image]
  confectionery.description = params[:description]
  confectionery.ingredients = params[:ingredients]
  confectionery.save
  redirect to("/confectioneries")
end

# Show
get '/confectioneries/:id' do
  @confectionery = Confectionery.find params[:id]
  erb :confectioneries_show
end

# Edit
get '/confectioneries/:id/edit' do
  @confectionery = Confectionery.find params[:id]
  erb :confectioneries_edit
end

# Update
post '/confectioneries/:id' do
  confectionery = Confectionery.find params[:id]
  confectionery.name = params[:name]
  confectionery.description = params[:description]
  confectionery.image = params[:image]
  confectionery.category_id = params[:category_id]
  confectionery.ingredients = params[:ingredients]
  confectionery.save
  redirect to("/confectioneries/#{ confectionery.id }")
end

# Delete
get '/confectioneries/:id/delete' do
  confectionery = Confectionery.find params[:id]
  confectionery.destroy
  redirect to('/confectioneries')
end


# Index
  get '/categories' do
    @categories = Category.all
    erb :categories_index
  end

# New
get '/categories/new' do
  erb :categories_new
end

# Create
post '/categories' do
  category = Category.new
  category.name = params[:name]
  category.description = params[:description]
  category.image = params[:image]
  category.save
  redirect to('/categories')
end

# Show
get '/categories/:id' do
  @category = Category.find params[:id]
  erb :categories_show
end

# Edit
get '/categories/:id/edit' do
  @category = Category.find params[:id]
  erb :categories_edit
end

# Update
post '/categories/:id' do
  category = Category.find params[:id]
  category.name = params[:name]
  category.description = params[:description]
  category.image = params[:image]
  category.save
  redirect to("/categories/#{ category.id }")
end

# Delete
get '/categories/:id/delete' do
  category = Category.find params[:id]
  category.destroy
  redirect to('/categories')
end




get '/pry' do
  binding.pry
end

after do
  ActiveRecord::Base.connection.close
end
