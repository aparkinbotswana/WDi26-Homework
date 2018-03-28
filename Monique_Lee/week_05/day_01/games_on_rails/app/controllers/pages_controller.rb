class PagesController < ApplicationController #inherit from application controller

  def home
    render :home
  end

  def about
    render :about
  end

end
