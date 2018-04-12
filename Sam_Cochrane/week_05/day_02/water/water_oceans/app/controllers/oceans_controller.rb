class OceanController < ApplicationController

    def index
      @ocean = Ocean.all
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

    def destroy
      ocean = Ocean.find params[:id]
      ocean.destroy
      redirect_to ocean_path # index
    end

    private
    # Return a safe set of parameters (with anything bad taken out)
    def ocean_params # Strong params
      # Whitelist
      params.require(:ocean).permit(:name, :image, :area, :volume, :depth, :coastline)
    end
  end
