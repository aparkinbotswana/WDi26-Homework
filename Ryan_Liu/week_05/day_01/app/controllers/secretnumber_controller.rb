class SecretnumberController < ApplicationController

  def numbers


  end

  def generate

    inputNum = params[:input_num].to_i
    @randNum = rand(1..inputNum)
  end

  def result
    #number = params[:number]
    @num = params[:selected_num].to_i
    @answer = rand(1..@num)
  end
end
