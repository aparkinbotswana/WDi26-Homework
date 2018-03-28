class MagicController < ApplicationController
  def magic

  end

  def result
    @magic_question = params[:magic_question]
    arr = [" It is certain","As I see it, yes", "Reply hazy try again", "Don't count on it", "My reply is no"].shuffle
    @magic_answer = arr[0]

  end
end
