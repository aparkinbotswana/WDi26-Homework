class MountainsController < ApplicationController
def index
  @mountains = Mountain.all
end

def show
  @mountain = Mountain.find params[:id]
end

def new
end

def create
  mountain = Mountain.create mountain_params
  redirect_to mountain_path(mountain.id)
end

def edit
  @mountain = Mountain.find params[:id]
end

def update
  mountain = Mountain.find params[:id]
  mountain.update params_params
  redirect_to mountain_path(mountain.id)
end

def destory
  mountain = Mountain.find params[:id]
  mountain.destroy
  redirect_to mountains_path #index
end


private
#return a safe set of parameters with anything bad taken out
def mountain_params #use this everytime. Whitelist.
  params.require(:mountain).permit(:name, :image, :height, :range, :country, :rank, :video)
  #everything added to the list needs to also be in here these are strong params
end
end

# CREATE TABLE mountains (
# id INTEGER PRIMARY KEY AUTOINCREMENT,
# name TEXT,
# image TEXT,
# height FLOAT,
# range TEXT,
# country TEXT,
# rank INTEGER,
# video TEXT
# );
