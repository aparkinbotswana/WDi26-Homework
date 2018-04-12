class SecretnumberController < ApplicationController
  def form
  end

  def lookup
    secretnumber = rand(1...10)
    guess = params[:secret_number].to_i
    @result = '';

    if guess == secretnumber
      @result = 'You guessed it !'
    else
      @result = "Wrong guess! the secret number is #{secretnumber}"
    end
  end

end
