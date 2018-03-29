class MagicballController < ApplicationController

  
  def magicball_answer
     @question1 = params[:question1]
     @answer = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'Very doubtful']
      @final_ans = @answer.sample

   end
end


# As I see it, yes
# Most likely
# Outlook good
# Yes
# Signs point to yes
# Reply hazy try again
# Ask again later
# Better not tell you now
# Cannot predict now
# Concentrate and ask again
# Don't count on it
# My reply is no
# My sources say no
# Outlook not so good
