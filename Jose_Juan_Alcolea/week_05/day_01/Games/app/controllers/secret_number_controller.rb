class SecretNumberController < ApplicationController
  def form
    player_input = 
    secret_number = rand(1..10)

    def guess_check ( player_input, secret_number )
       if player_input > secret_number
           puts "Wrong, sorry! Too high!"
       elsif player_input < secret_number
           puts "Wrong, sorry! Too low!"
       else
           puts "Congratulations, you've guessed the secret number! #{[secret_number]}"
           playAgain ( restart )
       end
  end
end
end
