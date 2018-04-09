class IdeologiesController < ApplicationController
  def index
    @ideologies = Ideology.all
  end

  def new
    @ideology = Ideology.new
  end

  def create
    ideology = Ideology.create ideology_params
    redirect_to ideology # /ideologies/:some_id i.e. the show page
  end

  def edit
    @ideology = Ideology.find params[:id]
  end

  def update
    ideology = Ideology.find params[:id]
    ideology.update ideology_params
    redirect_to ideology
  end

  def show
    @ideology = Ideology.find params[:id]
  end

  def destroy
    ideology = Ideology.find params[:id]
    ideology.destroy
    redirect_to ideologies_path
  end

  # Strong params: a whitelist of permitted fields
  private
  def ideology_params
    params.require(:ideology).permit(:name, :country, :created)
  end
end
