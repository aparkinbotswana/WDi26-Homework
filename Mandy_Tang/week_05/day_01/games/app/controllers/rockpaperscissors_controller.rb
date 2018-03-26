class RockpaperscissorsController < ApplicationController
  def home
  end

  def rock
    move = "rock"
    @computer_move = ["rock", "scissors", "paper"].sample
    if move == @computer_move
    @message = "You drew."
    end
    if @computer_move == "paper"
    @message = "You lost."
    end
    if @computer_move == "scissors"
    @message = "You won!"
    end
  end

  def paper
    move = "paper"
    @computer_move = ["rock", "scissors", "paper"].sample
    if move == @computer_move
    @message = "You drew."
    end
    if @computer_move == "rock"
    @message = "You won!"
    end
    if @computer_move == "scissors"
    @message = "You lost."
    end
  end

  def scissors
    move = "scissors"
    @computer_move = ["rock", "scissors", "paper"].sample
    if move == @computer_move
    @message = "You drew."
    end
    if @computer_move == "paper"
    @message = "You won!"
    end
    if @computer_move == "rock"
    @message = "You lost."
    end
  end
end
