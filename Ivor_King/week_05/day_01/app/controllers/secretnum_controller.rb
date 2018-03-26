class SecretnumController < ApplicationController
    def lander
    end

    def answer
        @var3 = rand(1..10)
        @var4 = params[:secretnumber].to_i
        if @var4 == @var3
            @output = "I guessed your number!"
        else
            @output = "Oh sad I didn't guess your number!"
        end
    end
end