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

class Comic < ActiveRecord::Base
    belongs_to :styles
end

class Style < ActiveRecord::Base
    has_many :comics
end

get '/' do
    erb :home
end

#### ------------------------------------------------COMICS

# Comics - index
get '/comics/' do
    @comics = Comic.all
    erb :comics_index
end

get '/lost/' do
    erb :lost
end

# Comics - new
get '/comics/new' do
    erb :comics_new
end

# Comics - create
post '/comics' do
    comic = Comic.new
    comic.name = params[:name]
    comic.nationality = params[:nationality]
    comic.age = params[:age]
    comic.style_id = params[:style_id]
    comic.save
    redirect to('/comics/')
end

# Comics - show
get '/comics/:id' do
    @comic = Comic.find params[:id]
    erb :comics_show
end

# Comics - edit
get '/comics/:id/edit' do
    @comic = Comic.find params[:id]
    erb :comics_edit
end

# Comics - update
post '/comics/:id' do
    comic = Comic.find params[:id]
    comic.name = params[:name]
    comic.nationality = params[:nationality]
    comic.age = params[:age]
    comic.image = params[:image]
    comic.style_id = params[:style_id]
    comic.save
    redirect to("/comics/#{ params[:id] }")
end

# Comics - delete
get '/comics/:id/delete' do
    comic = Comic.find params[:id]
    comic.destroy
    redirect to('/comics/')
end

#### -------------------------------------------------STYLES

# Styles - index
get '/styles/' do
    @styles = Style.all
    erb :styles_index
end

# Styles - new
get '/styles/new' do
    erb :styles_new
end

# Styles - create
post '/styles' do
    style = Style.new
    style.name = params[:name]
    style.origin = params[:origin]
    style.popularity = params[:popularity]
    style.save
    redirect to('/styles/')
end

# Styles - show
get '/styles/:id' do
    @style = Style.find params[:id]
    erb :styles_show
end

# Styles - edit
get '/styles/:id/edit' do
    @style = Style.find params[:id]
    erb :styles_edit
end

# Styles - update
post '/styles/:id' do
    style = Style.find params[:id]
    style.name = params[:name]
    style.origin = params[:origin]
    style.popularity = params[:popularity]
    style.save
    redirect to ('/styles/#{ style.id }')
end

# Styles - delete
get '/styles/:id/delete' do
    style = Style.find params[:id]
    style.destroy
    redirect to('/styles/')
end

#### ------------------------------------------------END

# Access pry
get '/pry' do
    binding.pry
end

after do
    ActiveRecord::Base.connection.close
end






