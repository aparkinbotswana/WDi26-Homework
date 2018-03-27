class SecretController < ApplicationController
  def form
  end

def secret_question
end

def secret_answer
  @guess = params[:guess]
  @number = Random.rand(10)
  if (@guess == @number)
    @response = "Winner Winner Chicken Dinner!"
  else
    @response = "No dinner for you"
  end
end
end
