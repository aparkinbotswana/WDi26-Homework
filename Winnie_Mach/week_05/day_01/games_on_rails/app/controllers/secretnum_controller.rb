class SecretnumController < ApplicationController

  def secretnum_index
  end

  def secretnum_result
    @guess_number = params[:guess_number].to_i
    pc_guess_number = rand(1..10)

    if @guess_number == pc_guess_number
      @match = "Congratulations! You've guessed the secret number! It was #{pc_guess_number}!"
    else
      @match = "Sorry, the secret number was #{pc_guess_number}."
    end

  end

end
