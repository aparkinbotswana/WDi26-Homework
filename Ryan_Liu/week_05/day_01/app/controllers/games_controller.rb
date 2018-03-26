class GamesController < ApplicationController
  def rock_paper_scissors_play
    rpsArr = ["rock", "scissors", "paper"]
    randNum = rand(0..2)
    @throw = params[:throw].downcase
    @server = rpsArr[randNum]
  end
end
