class MountainsController < ApplicationController

  def home
  end

  def index
    @mountains = Mountain.all
  end

  def show
    @mountain = Mountain.find params[:id]
  end

  def new

  end

  def create
    mountain = Mountain.create mountain_params
    #raise :hell
    redirect_to mountain_path(mountain.id)
  end

  def destroy
    mountain = Mountain.find params[:id]
    mountain.destroy
    redirect_to mountains_index_path
  end

  def edit
    @mountain = Mountain.find params[:id]
  end

  def update
    mountain = Mountain.find params[:id]
    mountain.update mountain_params #calling the private function again so only whitelist params can be updated.
    redirect_to mountain_path(mountain.id)
  end


  private #not an action.
  def mountain_params
    #whitelist
    params.require(:mountain).permit(:name, :height, :country, :image) #get me anything that has :planet at the beginning, then permit those strong params only. If you add a new column and forget to add it here in future, it won't go into db.
  end
end
