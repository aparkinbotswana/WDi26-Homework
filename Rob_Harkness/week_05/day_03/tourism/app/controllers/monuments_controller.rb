class MonumentsController < ApplicationController
  def index
    @monuments = Monument.all
  end

  def show
    @monument = Monument.find params[:id]
  end

  def new
    @monument = Monument.new
  end

  def create
    monument = Monument.create monument_params

    redirect_to monument
  end

  def edit
    @monument = Monument.find params[:id]
  end

  def update
    monument = Monument.find params[:id]
    monument.update monument_params
    redirect_to monument

  end

  def destroy
    monument = Monument.find params[:id]
    monument.destroy
    redirect_to monuments_path
  end

  private
  def monument_params
    params.require(:monument).permit(:name, :year, :description, :image, :city_id)
  end
end