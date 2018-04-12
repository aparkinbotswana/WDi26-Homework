class MoviesController < ApplicationController
  def index
    @movies = Movie.order(:created_at)
  end

  def new
    @movies = Movie.new
  end

  def create
    movie = Movie.create movie_params
    redirect_to movie
  end

  def edit
    @movie = Movie.find params[:id]
  end

  def update
    movie = Movie.find params[:id]
    movie.update movie_params
    redirect_to movie
  end

  def show
    @movie = Movie.find params[:id]
  end

  # delete records
  def destroy
    movie = Movie.find params[:id]
    movie.destroy
    redirect_to movie_path
  end

  # secutriy - strong params for form fields
  private
  def movie_params
    params.require(:movie).permit(:name, :year, :image, :director_id)
  end
end
