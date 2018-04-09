class PoliticiansController < ApplicationController
  def index
    @politicians = Politician.order(:created_at)
  end

  def new
    @politician = Politician.new
  end

  def create
    politician = Politician.create politician_params
    redirect_to politician
  end

  def edit
    @politician = Politician.find params[:id]
  end

  def update
    politician = Politician.find params[:id]
    politician.update politician_params
    redirect_to politician
  end

  def show
    @politician = Politician.find params[:id]
  end

  def destroy
    politician = Politician.find params[:id]
    politician.destroy
    redirect_to politicians_path
  end

  private
  def politician_params
    params.require(:politician).permit(:name, :age, :state, :image, :ideology_id)
  end
end
