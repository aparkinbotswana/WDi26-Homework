require 'pry'


$lines = {
  "N" => ["Times", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}



def single_trip ( line, start_station, finish_station )



  current_line = $lines[line]
  start_position = current_line.find_index(start_station)
  finish_position = current_line.find_index(finish_station)

  hop = current_line[start_position .. finish_position]
  return hop

end


def double_trip ( start_line, start_station, finish_line, finish_station)

  p single_trip start_line, start_station, "Union Square"
  p single_trip finish_line, "Union Square", finish_station

end



binding.pry

























# def single_trip ( line, start_station, finish_station )
#
#   lines = {
#     "N" => ["Times", "34th", "28th", "23rd", "Union Square", "8th"],
#     "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
#     "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
#   }
#
#
#   current_line =  lines[line]
#   start_position =  current_line.find_index(start_station)
#   finish_position =  current_line.find_index(finish_station)
#
#   hop = current_line[start_position .. finish_position]
#
# end








# require 'pry'
# # Set arrays of the different lines
# N = ["Times", "34th", "28th", "23rd", "Union Square", "8th"]
# L = ["8th", "6th", "Union Square", "3rd", "1st"]
# SIX = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
#
#
#
# def single_trip (line, start_station, finish_station)
#
#
#   first_position = line.find_index(start_station)
#   last_position = line.find_index(finish_station)
#   if (last_position < first_position)
#     line.reverse!
#     first_position = line.find_index(start_station)
#     last_position = line.find_index(finish_station)
#   end
#   hop = line[first_position .. last_position]
#   puts hop
#   return hop
#
# end
#
#
# def double_trip (start_line, start_station, finish_line, finish_station)
#
#     single_trip(start_line, start_station, "Union Square")
#     single_trip(finish_line, "Union Square", finish_station)
#
# end
#
#
#
#
#
#
# single_trip(N, "Union Square", "Times")
#
# double_trip(N, "Times", L, "1st")
#
# binding.pry
