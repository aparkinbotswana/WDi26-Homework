

$lines = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
}

def get_stops_on_same_line(line, from_station, to_station)
  #Get the Line index from the array
  #If entered line doesn't exist, exit the app with warning message

  current_line = $lines[line]

  startIndex = current_line.index(from_station)
  endIndex = current_line.index(to_station)

  if startIndex > endIndex
    travelling_stations = current_line[endIndex..startIndex].reverse
    puts "You must travel through the following stops on the #{line} line: #{travelling_stations.join(", ")}. Total of #{travelling_stations.length} stops."
  else
    travelling_stations = current_line[startIndex..endIndex]
    puts "You must travel through the following stops on the #{line} line: #{travelling_stations.join(", ")}. Total of #{travelling_stations.length} stops."
  end
end

puts "What line are you travelling on? : "
line = gets.chomp

puts "What statation are you travelling from? : "
from_station = gets.chomp

puts "What station are you travelling to? : "
to_station = gets.chomp

get_stops_on_same_line(line, from_station, to_station)

def get_stops_on_diff_lines(from_line, from_station, to_line, to_station)
  start_line = $lines[from_line]
  start_index = start_line.index(from_station)
  start_t_index = start_line.index("Union Square")

  end_line = $lines[to_line]
  end_index = end_line.index(to_station)
  end_t_index = end_line.index("Union Square")

  case
  when start_index > start_t_index && end_index > end_t_index
    start_line_stops = start_line[start_t_index + 1..start_index].reverse
    end_line_stops = end_line[end_t_index + 1..end_index]
    puts "You must travel through the following stops on the #{from_line} line: #{start_line_stops.join(", ")}."
    puts "Change at Union Sqaure"
    puts "Your journey continues through the following stops: #{end_line_stops.join(", ")}."
    puts "#{start_line_stops.size + end_line_stops.size + 1} stops in total."
  when start_index < start_t_index && end_index < end_t_index
    start_line_stops = start_line[start_index...start_t_index]
    end_line_stops = end_line[end_index...end_t_index].reverse
    puts "You must travel through the following stops on the #{from_line} line: #{start_line_stops.join(", ")}."
    puts "Change at Union Sqaure"
    puts "Your journey continues through the following stops: #{end_line_stops.join(", ")}."
    puts "#{start_line_stops.size + end_line_stops.size + 1} stops in total."
  when start_index > start_t_index && end_index < end_t_index
    start_line_stops = start_line[start_t_index + 1..start_index].reverse
    end_line_stops = end_line[end_index...end_t_index].reverse
    puts "You must travel through the following stops on the #{from_line} line: #{start_line_stops.join(", ")}."
    puts "Change at Union Sqaure"
    puts "Your journey continues through the following stops: #{end_line_stops.join(", ")}."
    puts "#{start_line_stops.size + end_line_stops.size} stops in total."
  when start_index < start_t_index && end_index > end_t_index
    start_line_stops = start_line[start_index...start_t_index]
    end_line_stops = end_line[end_t_index + 1..end_index]
    puts "You must travel through the following stops on the #{from_line} line: #{start_line_stops.join(", ")}."
    puts "Change at Union Sqaure"
    puts "Your journey continues through the following stops: #{end_line_stops.join(", ")}."
    puts "#{start_line_stops.size + end_line_stops.size} stops in total."
  end
end

get_stops_on_diff_lines("N", "8th", "6", "Astor Place")
