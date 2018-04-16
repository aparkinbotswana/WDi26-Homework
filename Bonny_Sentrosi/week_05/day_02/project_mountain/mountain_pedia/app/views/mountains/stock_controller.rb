
class StocksController < ApplicationController
  def form
  end

  def lookup
    @stock = params[:stock_symbol].upcase
    @last_price = StockQuote::Stock.quote(@stock).close
  end
end
