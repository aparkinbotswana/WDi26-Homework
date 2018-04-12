class GamesController < ApplicationController
  def games;
  end

  def rps
    @player = params[:rps]
    @opponent = %w[rock paper scissors].sample
    @result = if @player == 'rock'
                if @opponent == 'scissors'
                  'win!'
                elsif @opponent == 'paper'
                  'lose'
                else
                  'draw'
                end
              elsif @player == 'paper'
                if @opponent == 'scissors'
                  'lose'
                elsif @opponent == 'rock'
                  'win!'
                else
                  'draw'
                end
              elsif @player == 'scissors'
                if @opponent == 'rock'
                  'lose'
                elsif @opponent == 'paper'
                  'win!'
                else
                  'draw'
                end
              end
  end

  def guess
    @num = if params[:num].nil?
             rand(1..20)
           else
             params[:num].to_i
           end

    @guess = params[:guess].to_i
  end

  def eight_ball
    @answer = ['all signs point to yes', 'all signs point to no', 'maybe', 'seems likely', 'seems unlikely', "it's uncertain"].sample
  end
end
