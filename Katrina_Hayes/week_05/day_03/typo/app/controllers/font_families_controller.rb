class FontFamiliesController < ApplicationController
  def index
    @font_families = FontFamily.all
  end

  def new
    @font_family = FontFamily.new
  end

  def create
    font_family = FontFamily.create font_family_params
    redirect_to font_family
  end

  def edit
    @font_family = FontFamily.find params[:id]
  end

  def update
    font_family = FontFamily.find params[:id]
    font_family.update font_family_params
    redirect_to font_family
  end

  def show
    @font_family = FontFamily.find params[:id]
  end

  def destroy
    font_family = FontFamily.find params[:id]
    font_family.destroy
    redirect_to font_families_path
  end

  private
  def font_family_params
    params.require(:font_family).permit(:name, :description, :famous_examples)
  end
end
