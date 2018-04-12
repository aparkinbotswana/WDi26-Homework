class MagicController < ApplicationController
  def form
  end

  def lookup
    @secret = params[:secret].titleize

  end
end
