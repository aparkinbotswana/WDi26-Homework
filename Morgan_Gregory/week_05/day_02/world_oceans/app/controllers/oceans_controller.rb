class OceansController < ApplicationController
  def index
    @oceans = Ocean.all
  end

  def show
    @ocean = Ocean.find params[:id]
  end

  def new
  end

  def create
    ocean = Ocean.create ocean_params
    redirect_to ocean_path(ocean.id)
  end

  def edit
    @ocean = Ocean.find params[:id]
  end

  def update
    ocean = Ocean.find params[:id]
    ocean.update ocean_params
    redirect_to ocean_path(ocean.id)
  end

  # security below 
  def destroy
    ocean = Ocean.find params[:id]
    ocean.destroy
    redirect_to oceans_path #index
  end

  private
  # this makes the form safer by not allowing bad input to end up in the database
  def ocean_params
    params.require(:ocean).permit(:name, :max_depth, :average_depth, :surface_area, :map_ocean, :image_ocean)
  end
end
