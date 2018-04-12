class FontsController < ApplicationController
  def index
    @fonts = Font.all
  end

  def new
    @font = Font.new
  end

  def create
    font = Font.create font_params
    redirect_to font
  end

  def edit
    @font = Font.find params[:id]
  end

  def update
    font = Font.find params[:id]
    font.update font_params
    redirect_to font
  end

  def show
    @font = Font.find params[:id]
  end

  def destroy
    font = Font.find params[:id]
    font.destroy
    redirect_to fonts_path
  end

  private
  def font_params
    params.require(:font).permit(:name, :alphabet, :description, :font_family_id)
  end
end
