require "pry"



## John's Solution
# def single_trip line, start_station, finish_station
#
#   lines = {
#     "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
#     "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
#     "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
#   }
#
#   current_line = lines[line]
#   start_position = current_line.find_index(start_station)
#   finish_position = current_line.find_index(finish_station)
#
#   hop = current_line[start_position .. finish_position]
#   return hop
# end
#
# def double_trip start_line, start_station, finish_line, finish_station
#
#   p single_trip start_line, start_station, "Union Square"
#   p single_trip finish_line, "Union Square", finish_station
#
# end


binding.pry
def single_journey line, start_station, end_station
  lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  current_line =  lines[line]
  start = lines[line].index(start_station)
  finish = lines[line].index(end_station)
  union_square_index = lines[line].index("Union Square")

  if start < union_square_index
    p current_line[start .. finish]
  else
    line_backwards = current_line[start .. finish].reverse
    p line_backwards


end

single_journey "N", "34th", "8th"
single_journey "L", "8th", "3rd"
single_journey "6", "33rd", "Astor Place"


def double_journey start_line, start_station, end_line, end_station

  leg1 = single_journey start_line, start_station, "Union Square"
  leg2 = single_journey end_line, "Union Square", end_station
  full_journey = leg1 + leg2
  #["Times Square", "34th", "28th", "23rd", "Union Square", "Union Square" "3rd", "1st"]
  p full_journey.uniq # gets rid of Union Square duplicate.
  p full_journey.uniq.length

end

double_journey "N", "34th", "6", "Astor Place"
double_journey "N", "Times Square", "L", "1st"
double_journey "6", "33rd", "L", "8th"
end
