class RockpaperscissorsController < ApplicationController
  def form
  end

  def play

    throws = ['rock','paper','scissors']
    computer_throw =  throws.sample
    throw = params[:throw]
    @result = ""

    if throw == computer_throw
      @result = "You Win the throw was #{computer_throw}"
    else
      @result = "You lose the throw was #{computer_throw}"
    end

  end

end
