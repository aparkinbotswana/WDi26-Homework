class GamesController < ApplicationController
  def magic_8_ball_answer
    possible_answers = ['You even need to ask?', "My source's source's source says no.", "I'm getting a definite yes vibe.", 'You call that a question?', 'Thank you, come again.', 'But of course!', 'Hell no.', 'You betcha.', 'Heck yes.', 'Murky waters abound.']
    possible_answers = possible_answers.shuffle
    @answer = possible_answers[0]
  end

  def secret_number_result
    possible_answers = [1,2,3,4,5,6,7,8,9,10]
    possible_answers = possible_answers.shuffle
    @answer = possible_answers[0]
  end

  def scissors_paper_rock_play
    @winner = ""
    @human_throw = params[:throw]
    possible_throws = ["scissors", "paper", "rock"]
    possible_throws = possible_throws.shuffle
    @computer_throw = possible_throws[0]
    if @computer_throw == "scissors"
      if @human_throw == "paper"
        @winner = "Computer wins."
      elsif @human_throw == "rock"
        @winner = "Human wins."
      else
        @winner = "It's a draw."
      end
    end
    if @computer_throw == "paper"
      if @human_throw == "rock"
        @winner = "Computer wins."
      elsif @human_throw == "scissors"
        @winner = "Human wins."
      else
        @winner = "It's a draw."
      end
    end
    if @computer_throw == "rock"
      if @human_throw == "scissors"
        @winner = "Computer wins."
      elsif @human_throw = "paper"
        @winner = "Human wins."
      else
        @winner = "It's a draw."
      end
    end
  end

end
