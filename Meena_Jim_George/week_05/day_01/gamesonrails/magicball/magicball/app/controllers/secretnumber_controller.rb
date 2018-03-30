class SecretnumberController < ApplicationController


  def correctnumber
     @num = params[:num]
     secretnumber = rand(1..10)
    if @num == secretnumber
      @result = "YOU WIN!"
    else
      @result = "TRY AGAIN!"
      # if @num < secretnumber
      #   #do something
      # else
      #   #do dsomething else
      # end
     # secret_num = 7
     # if secret_num == num
     #   puts "You WIN!"
     # end
    end
   end
end
