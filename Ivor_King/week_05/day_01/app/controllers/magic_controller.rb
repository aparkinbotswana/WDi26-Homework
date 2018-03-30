class MagicController < ApplicationController
    def lander
    end

    def answer
        @var2 = rand(1..2)
        if @var2 == 1
            @answer = "Yes"
        else
            @answer = "No"
        end
    end   
end

