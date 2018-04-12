class CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def new;
  end

  def create
    city = City.create city_params
    redirect_to cities_path
  end

  def show
    @city = City.find params[:id]
  end

  def destroy
    city = City.find params[:id]
    city.destroy
    redirect_to cities_path
  end

  def edit
    @city = City.find params[:id]
  end

  def update
    city = City.find params[:id]
    city.update city_params
    redirect_to city_path(city.id)
  end

  private

  def city_params
    # whitelist
    params.require(:city).permit(:name, :image, :population, :country, :wikilink)
  end

end
