class MagicController < ApplicationController
  def magic
    @user_question = params[:user_question]
      number = rand(1..10) # generates a random number
      if number > 5
        @answer = "Yes"
      else
        @answer = "No"
      end
  end
end
