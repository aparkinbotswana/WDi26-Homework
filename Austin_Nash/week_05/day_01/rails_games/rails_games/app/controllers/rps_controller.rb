class RpsController < ApplicationController
  def rps
  end

  def result
    @your_move = params[:rps]
    move = ["rock", "paper", "scissors"].shuffle
    @my_move = move[0]
    if @your_move == @my_move
       @winner = "you win"
    end
    if @your_move == "rock" && @my_move == "scissors"
       @winner = "you win"
    end
    if @your_move == "paper" && @my_move == "rock"
       @winner = "you win"
    end
    if @your_move == "scissors" && @my_move == "paper"
       @winner = "you win"
    end
  end
end
