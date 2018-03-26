class MagicController < ApplicationController
  def form
  end

  def lookup
    @magic = params[:magic].titleize
    combination = ["It is certain", "It's decidely so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again!", "Ask again later", "Better not tell you now", "Cannot predict now", "Concerntrate and try again!", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]
    @answer = combination.sample

  end
end
