class NumberController < ApplicationController
  def number


  end

  def result
    @your_number = params[:number].to_i
    arr = [1,2,3,4,5,6,7,8,9,10].shuffle
    @my_number = arr[0]

    if @your_number == @my_number
       @winner = "You win"
    end
    if @your_number != @my_number
       @winner = "You lose!"
    end
  end
end
