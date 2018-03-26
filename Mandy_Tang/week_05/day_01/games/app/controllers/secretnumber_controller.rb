class SecretnumberController < ApplicationController
  def home
  end

  def guess
    correct_guess = rand(1..10)
    if correct_guess == params[:number]
      @result = "Nice work! Your guess was correct."
    else
      @result = "Your guess was incorrect. The answer was #{correct_guess}."
    end
  end
end
