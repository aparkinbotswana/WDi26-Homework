class Magic8ballController < ApplicationController
  def home
  end

  def ask
    answer = ["Yes", "No"].sample
    if answer == "Yes"
      long_answer = ["It is certain.", "Without a doubt.", "Most likely.", "As I see it, yes."]
      @show_answer = long_answer.sample
      case @show_answer
      when "It is certain."
        @img_src = "/assets/certain.png"
      when "Without a doubt."
        @img_src = "/assets/nodoubt.png"
      when "Most likely."
        @img_src = "/assets/mostlikely.png"
      when "As I see it, yes."
        @img_src = "/assets/asiseeityes.png"
      end
    end
    if answer == "No"
      long_answer = ["Ask again later.", "My reply is no.", "Who knows."]
      @show_answer = long_answer.sample
      case @show_answer
      when "Ask again later."
        @img_src = "/assets/askagainlater.png"
      when "My reply is no."
        @img_src = "/assets/myreplyisno.png"
      when "Who knows."
        @img_src = "/assets/whoknows.png"
      end
    end
    render :ask

  end
end
