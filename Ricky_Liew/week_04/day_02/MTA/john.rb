require "pry"




$lines = {
  "N" => ["Time Square","34th","28th","23rd","Union Square","8th"],
  "L" => ["8th","6th","Union Square","3rd","1st"],
  "6" => ["Grand Central","33rd","28th","23rd","Union Square","Astor Place"]
}

def single_trip (line, start_station, finish_station)
  current_line = $lines[line]
  start_position = current_line.find_index(start_station)
  finish_position = current_line.find_index(finish_station)




  hop = current_line[start_position .. finish_position]

end


def double_trip (start_line, start_station, finish_line, finish_station)

  single_trip(start_line, start_station, "Union Square")
  single_trip(finish_line, "Union Square", finish_station)

end





binding.pry
