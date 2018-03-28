class GamesController < ApplicationController #inherit from application controller

#############################

  def magic_8_ball
    @question = params[:question].to_s

    # @answer = 'dummy answer'

    def responses
      [ "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
      ]
    end

    def random_response
        if @question.empty?
          return ""
        else
        responses[Random.rand(responses.size)]
      end
    end

    @answer = random_response


    #render :magic_8_ball
  end

###########################

  def secret_number
    def nums
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    end

    def random_num
      #if params[:selection].attr(option[selected="selected"])
        nums[Random.rand(nums.size)]
      #end
    end

    def secret_number_answer
     @num = random_num
    end

      #render :secret_number
   end

   ########################################

   def rock_paper_scissors

     render :rock_paper_scissors
  end


end
