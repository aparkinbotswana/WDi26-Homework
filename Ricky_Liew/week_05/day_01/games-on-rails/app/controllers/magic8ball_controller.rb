class Magic8ballController < ApplicationController
  def form
  end

  def answer
    answers = {
      1 => "It is known",
      2 => "It is certain",
      3 => "It is decidedly so",
      4 => "Without a doubt",
      5 => "Yes definitely",
      6 => "You may rely on it",
      7 => "As I see it, yes",
      8 => "Most likely",
      9 => "Outlook good",
      10 => "Yes",
      11 => "Signs point to yes",
      12 => "Reply hazy try again",
      13 => "Ask again later",
      14 => "Better not tell you now",
      15 => "Cannot predict now",
      16 => "Concentrate and ask again",
      17 => "Fear cuts deeper than swords",
      18 => "Winter is coming",
      19 => "You win or you die",
      20 => "Nothing burns like the cold",
      21 => "What do we say to the Lord of Death?",
      22 => "Every flight begins with a fall",
      23 => "Different roads sometimes lead to the same castle",
      24 => "A bruise is a lesson... and each lesson makes us better",
      25 => "Don't count on it",
      26 => "My reply is no",
      27 => "My sources say no",
      28 => "Outlook not so good",
      29 => "Very doubtful",
      30 => "Definitely maybe"
    }

    random_number = rand(1..30)
    @reply = answers[random_number]

  end



end
