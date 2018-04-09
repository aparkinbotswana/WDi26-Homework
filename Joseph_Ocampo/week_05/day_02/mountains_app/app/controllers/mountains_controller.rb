class MountainsController < ApplicationController

  def index
    @mountains = Mountain.all
  end

  def show
    @mountains = Mountain.find params[:id]
  end

  def new
  end

  def create
    planet = Planet.create planet_params
    redirect_to planet_path(planet.id)
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    planet = Planet.find params[:id]
    planet.update planet_params
    redirect_to planet_path(planet.id)
  end

  def destroy
    planet = Planet.find params[:id]
    planet.destroy
    redirect_to planets_path #index
  end


end
