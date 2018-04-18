class CharactersController < ApplicationController
  def index
    @characters = Character.all.order(:created_at)
  end

  def new
    @character = Character.new
  end

  def create
    character = Character.create character_params
    redirect_to character #character aka character_path(character.id)
  end

  def edit
    @character = Character.find params[:id]
  end

  def update
    character = Character.find params[:id]
    character.update character_params #calling that private whitelist function again.
    redirect_to character #character aka character_path(character.id)
  end

  def destroy
    character = Character.find params[:id]
    character.destroy
    redirect_to characters_path
  end

  def show
    @character = Character.find params[:id]
  end
end


private
def character_params
  params.require(:character).permit(:name, :age, :dob, :description, :image, :movie_id)
end
