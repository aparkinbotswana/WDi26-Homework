class SecretnoController < ApplicationController

  def form

  end

  def lookup
    @no = rand(1..10)
    if @no == params[:secretno]
      @result =  "You Won. The Secret number is "
    else
      @result= "You Lose. The Secret number is "

    end

  end

end
