class RockpaperController < ApplicationController
  def form

  end

  def lookup
    # arr = {
    #   :rock => {:rock=>:win, :paper=>:lose, :scissors=>:wins},
    #   :paper => {:rock=>:win, :paper=>:win, :scissors=>:lose},
    #   :scissors => {:rock=>:lose, :paper=>:win, :scissors=>:win}
    # },
      arr=["rock","paper","scissors"]
      userchoice = params[:throw].downcase
      @result = arr.sample
      if userchoice == @result
        @result1 =  "You Won as computer chose #{ @result} "
      elsif userchoice == "paper" && @result == "rock"
        @result1 ="You Won as computer chose #{ @result}"
      elsif userchoice == "rock" && @result == "paper"
        @result1 ="You lose as computer chose #{ @result}"
      elsif userchoice == "rock" && @result == "scissors"
        @result1 ="You Won as computer chose #{ @result}"
      elsif userchoice == "scissors" && @result == "rock"
        @result1 ="You lose as computer chose #{ @result}"
      elsif userchoice == "scissors" && @result == "paper"
        @result1 ="You Won as computer chose #{ @result}"
      elsif userchoice == "paper" && @result == "scissors"
        @result1 ="You lose as computer chose #{ @result} "
      end

    end
end
