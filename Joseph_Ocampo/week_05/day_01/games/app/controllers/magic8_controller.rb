class Magic8Controller < ApplicationController
  def form
  end

  def lookup

    answers = ['It is certain','It is decidedly so','Yes definitely',"Don't count on it","My reply is no","My sources say no"]

    @reply =  answers.sample

  end
end
