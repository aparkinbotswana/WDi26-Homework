
class SecretnumberController < ApplicationController
  def form
  end

  def guess
    @userguess = params[:choice].to_i
    @mynum = rand(1..10)
    # raise
    @correct = false
    @message = ''
    if @userguess == @mynum
      @correct = true
      @message = "Correct!"
    else
      @correct = false
      @message = "Wrong guess"
    end
  end

end
