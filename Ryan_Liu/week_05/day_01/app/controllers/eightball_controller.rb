class EightballController < ApplicationController
  def form
  end

  def answer

    @question = params[:question]
    params = URI.encode(@question)
    uri = URI.join('https://8ball.delegator.com/magic/JSON/', params)
    response = HTTParty.get uri
    @answer = response["magic"]["answer"]
  end
end
