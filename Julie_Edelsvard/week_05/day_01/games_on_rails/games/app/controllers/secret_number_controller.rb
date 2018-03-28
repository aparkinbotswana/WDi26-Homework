class SecretNumberController < ApplicationController
  def game

    @game_input = params[:game_input]
    @answer = Random.rand(1..10)

    if @game_input.to_i == @answer
      @reply = "The secret numer is #{@answer} and your answer was #{@game_input}. Congratulations."
    else
      @reply = "The secret numer is #{@answer} and your answer was #{@game_input}. Better luck next time."
    end
  end
end
