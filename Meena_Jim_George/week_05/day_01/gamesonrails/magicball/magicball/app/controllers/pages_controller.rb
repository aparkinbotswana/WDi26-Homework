class PagesController < ApplicationController
  def home

  end

  def magicball
    render :magicball
  end

  def secretnumber
    render :secretnumber
  end

  def games
    render :rock_paper_scissors
    # render :games

  end

end
