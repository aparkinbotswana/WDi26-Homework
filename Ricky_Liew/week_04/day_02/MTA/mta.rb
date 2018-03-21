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
  #p "start position: #{start_position}"
  #p "End position: #{finish_position}"

  if start_position > finish_position
    hop = current_line[finish_position .. start_position]
    hop.reverse!
  elsif start_position < finish_position
    hop = current_line[start_position .. finish_position]
  end
end


def double_trip (start_line, start_station, finish_line, finish_station)

  trip1 = single_trip(start_line, start_station, "Union Square")
  trip2 = single_trip(finish_line, "Union Square", finish_station)
  trip1.delete "Union Square"
  #p trip1
  #p trip2

  total_trip = trip1+trip2
end

# test data:
# single_trip("N","8th", "34th")
# double_trip("N","34th", "6", "33rd")
# single_trip("N","34th", "Union Square")
# single_trip("6","Union Square", "33rd")

#binding.pry

puts "Start line: "
start_line = gets.chomp
puts "Start station: "
start_station = gets.chomp

puts "End line: "
end_line = gets.chomp
puts "End station: "
end_station = gets.chomp

if start_line.downcase == end_line.downcase
  puts single_trip(start_line, start_station, end_station)
else
  puts double_trip(start_line, start_station, end_line, end_station)
end
