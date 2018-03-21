require 'pry'

def scrabble word

  values = {
    1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2 => ["D", "G"],
    3 => ["B", "C", "M", "P"],
    4 => ["F", "H", "V", "W", "Y"],
    5 => ["K"],
    8 => ["J", "X"],
    10 => ["Q", "Z"]
  }


  result = 0

  word.upcase.split('').each do |letter|

    values.each do |key, value|
      # if value.include? letter
      #   result += key
      # end
      result += key if value.include?  letter 
    end
  end

  result
end


binding.pry
