class NumberController < ApplicationController
  def number


  end

  def result
    @your_number = params[:number]
    arr = [1,2,3,4,5,6,7,8,9,10].shuffle
    @my_number = arr[0]
    @win_lose = "You lose, try again" unless @your_number == @my_number
  else "You Win!"
  end
end
