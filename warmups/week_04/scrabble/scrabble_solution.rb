score = 0

values = {
  1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2 => ["D", "G"],
  3 => ["B", "C", "M", "P"],
  4 => ["F", "H", "V", "W", "Y"],
  5 => ["K"],
  8 => ["J", "X"],
  10 => ["Q", "Z"]
}


word.upcase.split('').each do |letter|

  letter

##need to pull john's solution from hw directory. 






  ######## Joe's Even shorter solution.

  # Invert the values hash
# So that we can look up the points for each letter directly. i.e. enter Q and it will return 10 pnts.

# points_for = {}
# values.each do |points, letters|
#   letters.each { |letter| points_for[letter] = points }
# end
