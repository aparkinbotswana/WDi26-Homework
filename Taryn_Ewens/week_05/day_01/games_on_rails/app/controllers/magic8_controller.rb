class Magic8Controller < ApplicationController
  def game
  end

  def results
    options = ["It is certain.", "As I see it, yes.", "It is decidedly so.", "Yes definitely.", "You may rely on it.", "Without a doubt.", "Outlook good.", "Most likely.", "Yes.", "Signs point to yes.", "Reply hazy try again.", "Ask again later.", "Better not tell you now.", "Cannot predict now", "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."]

    @response = options.sample
  end

end
