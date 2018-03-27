class RockPaperScissorsController < ApplicationController
  def game
  end

  def results
    options = ["rock", "paper", "scissors"]
    @user = params[:guess].downcase
    @comp = options.sample

    if @user == "rock" && @comp == "scissors"
      @results = "You win!"
    elsif @user == "rock" && @comp == "paper"
      @results = "You lose."
    elsif @user == "rock" && @comp == "rock"
      @results = "It's a draw."
    elsif @user == "paper" && @comp == "paper"
      @results = "It's a draw."
    elsif @user == "paper" && @comp == "scissors"
      @results = "You lose."
    elsif @user == "paper" && @comp == "rock"
      @results = "You win!"
    elsif @user == "scissors" && @comp == "paper"
      @results = "You win!"
    elsif @user == "scissors" && @comp == "scissors"
      @results = "It's a draw."
    elsif @user == "scissors" && @comp == "rock"
      @results = "You lose."
    else
      @results = "You played an invalid hand gesture."
    end

  end

end
