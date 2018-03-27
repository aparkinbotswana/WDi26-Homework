class SecretController < ApplicationController
  def secret
    @user_click = params[:user_click]

    secret_number = rand(1..11)
    if  @user_click === secret_number
      @answer = "Yes you win!!!"
    else
      @answer = "Nope sorry you loos"
    end
  end
end
