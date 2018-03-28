class RpsController < ApplicationController

def rps_index

end

def rps_winlose
user_throw = params[:throw]
@ai_throw = ["rock", "paper", "scissors"].sample

  if user_throw == @ai_throw
    @result = "It's a draw!"
  elsif user_throw == "rock"
    if @ai_throw == "paper"
      @result = "You lose :("
    else #ai_thow == scissors
      @result = "Yay! You win!"
    end
  elsif user_throw == "paper"
    if @ai_throw == "scissors"
      @result = "You lose T_T"
    else #ai_throw == rock
    @result = "Congratulations you win!!"
    end
  elsif user_throw == "scissors"
    if @ai_throw == "rock"
      @result = "You lose, try again!"
    else
      @result = "Whoo! You win!!!"
    end
  end
  #raise :hell


end


end

# ENTRY_TO_SYM = { 'p'=>:PAPER, 'r'=>:ROCK, 's'=>:SCISSORS }
# VALID_ENTRIES = ENTRY_TO_SYM.keys
# COMPUTER_CHOICES = ENTRY_TO_SYM.values
# # WINNERS and LOSERS from the player's perspective, the first value of each
# # pair being the player's choice, the second, the computer's choice.
# WINNERS = [[:SCISSORS, :PAPER], [:PAPER, :ROCK], [:ROCK, :SCISSORS]]
# LOSERS =  WINNERS.map { |i,j| [j,i] }
#
# class RockPaperScissors
#
#       player = player_choice
#       computer = COMPUTER_CHOICES.sample
#       puts "\nPlayer chooses #{player.to_s}"
#       puts "Computer chooses #{computer.to_s}"
#
#       case player_outcome [player, computer]
#       when :WIN
#         puts "#{player.to_s} beats #{computer.to_s}, player wins the round"
#         @player_score += 1
#       when :LOSE
#         puts "#{computer.to_s} beats #{player.to_s}, computer wins the round"
#         @computer_score += 1
#       else
#         puts "Tie, choose again"
#         @ties += 1
#       end
#     end
#
#   end
#
#
# def player_choice
#   loop do
#     print "Choose rock (r), paper (p) or scissors (s): "
#     choice = gets.chomp.downcase
#     return ENTRY_TO_SYM[choice] if ENTRY_TO_SYM.key?(choice)
#     puts "That entry is invalid. Please re-enter"
#   end
# end
#
# def player_outcome(plays)
#   return :WIN  if WINNERS.include?(plays)
#   return :LOSE if LOSERS.include?(plays)
#   :TIE
# end
# end
