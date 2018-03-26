class RocksController < ApplicationController
    def lander
    end

    def play
        @var5 = rand(1..3)
        @var6 = params[:throw].to_i
        if @var5 == @var6
            @output2 = "It's a draw"
        else
            case @var5
                when 1 
                    @output2 = "Computer wins"
                when 2
                    if @var6 == 1
                        @output2 = "Computer wins"
                    else
                        @output2 = "You win"
                    end
                when 3
                    if @var6 == 1
                        @output2 = "Computer wins"
                    else
                        @output2 = "You win"
                    end
            end
        end
    end
end