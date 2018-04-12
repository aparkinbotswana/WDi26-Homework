class SecretNumberController < ApplicationController
  def game
  end

  def results
    nums = (1..10).to_a
    @guess = params[:guess].to_i
    @secret_number = nums.sample.to_i
    if @secret_number == @guess
      @results = "You guessed the secret number #{@secret_number}! Well done!"
    else
      @results = "Sorry #{@guess} is not the secret number. It was #{@secret_number}."
    end
  end
end
