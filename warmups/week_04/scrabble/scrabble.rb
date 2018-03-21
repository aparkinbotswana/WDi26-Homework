def scrabble word

  score = 0

  letter_values = {
    1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2 => ["D", "G"],
    3 => ["B", "C", "M", "P"],
    4 => ["F", "H", "V", "W", "Y"],
    5 => ["K"],
    8 => ["J", "X"],
    10 => ["Q", "Z"]
  }


  word.upcase.split('').each do |letter|

    letter_values.each do |letter_score, letter_list|

      if letter_list.include? letter
        score += letter_score
      end

      # # this is a way to write the if statement on one line
      # score += letter_score if letter_list.include?  letter


    end


  end

  score
end
# somethin
p scrabble "cabbage"
