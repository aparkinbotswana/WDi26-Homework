class RockpaperscissorsController < ApplicationController
  def form
  end

  def result
    gamechoice = {
      1 => "Rock",
      2 => "Paper",
      3 => "Scissors"
    }
    rand_number = rand(1..3)
    @computerchoice = gamechoice[rand_number]

    @userchoice = params[:choice]
    @userwin = false
    @message = ''

    if @userchoice == "Rock" && @computerchoice == "Paper"
      @userwin = false
    elsif @userchoice == "Paper" && @computerchoice == "Scissors"
      @userwin = false
    elsif @userchoice == "Scissors" && @computerchoice == "Rock"
      @userwin = false
    else
      @userwin = true
    end

    if @userwin == true
      @message = "You Win!"
    else
      @message = "You Lose!"
    end
  end

end
