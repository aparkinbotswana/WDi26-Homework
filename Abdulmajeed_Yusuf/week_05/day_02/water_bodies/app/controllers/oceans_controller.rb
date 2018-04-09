class OceansController < ApplicationController

  def index
    @ocean = Ocean.all
  end

  def new

  end

  def create
    ocean = Ocean.create ocean_params
    redirect_to ocean_path(ocean.id)
  end

end
