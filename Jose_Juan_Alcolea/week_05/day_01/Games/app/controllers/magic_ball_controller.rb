class MagicBallController < ApplicationController

  def form

    @question = params
    @random_num = rand(1..20)


      unless @question[:title].nil?
      if @random_num == 1
        @awnser = 'Concentrate and ask again'
      elsif @random_num == 2
          @awnser = 'Outlook not so good'
        elsif @random_num == 3
          @awnser = 'It is certain'
        elsif @random_num == 4
          @awnser = 'My reply is no'
        elsif @random_num == 5
          @awnser = 'Signs point to yes'
        elsif @random_num == 6
          @awnser = 'Without a doubt'
        elsif @random_num == 7
          @awnser = 'It is decidedly so'
        elsif @random_num == 8
          @awnser = 'Yes definitely'
        elsif @random_num == 9
          @awnser = 'My sources say no'
        elsif @random_num == 10
          @awnser = "Don't count on it"
        elsif @random_num == 11
          @awnser = "You may rely on it"
        elsif @random_num == 12
          @awnser = "As I see it, yes"
        elsif @random_num == 13
          @awnser = "Most likely"
        elsif @random_num == 14
          @awnser = "Very doubtful"
        elsif @random_num == 15
          @awnser = "Outlook good"
        elsif @random_num == 16
          @awnser = "Signs point to yes"
        elsif @random_num == 17
          @awnser = "Reply hazy try again"
        elsif @random_num == 18
          @awnser = "Ask again later"
        elsif @random_num == 19
          @awnser = "Cannot predict now"
        elsif @random_num == 20
          @awnser = "Better not tell you now"


      end
    end
  end
end
