require 'pry'

#
# $lines = {
# "N" = ["Times Square", "34th", "28thN", "23rd", "Union Square", "8thN"]
# "L" = ["8th", "6th", "Union Square", "3rd", "1st"]
# "6" = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
# }
#$lines


def single_trip ( line , star_station, finish_station )


  lines = {
  :N => ["Times Square", "34th", "28thN", "23rd", "Union Square", "8thN"],
  :L =>  ["8th", "6th", "Union Square", "3rd", "1st"],
  :L6 => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }



  current_line = lines[line]
  
  start_position = current_line.find_index(star_station)
  finis_position = current_line.find_index(finish_station)


  hop = current_line[start_position .. finis_position]
return hop
  # range
end


def double_trip ( start_line, star_station, finish_line, finish_station)

  p single_trip  start_line, star_station, "Union Square"
  p single_trip  finish_line, "Union Square", finish_station

end

binding.pry
