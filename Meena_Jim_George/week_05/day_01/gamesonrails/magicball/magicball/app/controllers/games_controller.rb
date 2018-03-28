class GamesController < ApplicationController


  def rock_paper_scissors_play
    @throw = params[:throw].downcase
     @computer = "rock"
    if @throw == @computer
      @result = "draw"
    elsif @throw == "paper"
     @result = "paper wins!"
   else
     @result = "you lose!scissors!"
   end

end
end
