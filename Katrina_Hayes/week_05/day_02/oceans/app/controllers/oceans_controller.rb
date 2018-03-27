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

  private
  def ocean_params
    params.require(:ocean).permit(:name, :location, :surface_percent, :fun_fact, :image)
  end

end
