# require 'pry'
$lines = {
  "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

#
# def trip_input trip
#   if trip == "single"
#     print "What line are you travelling on? : "
#     line = gets.chomp
#     print "What station are you boarding? : "
#     start_station = gets.chomp
#     print "What station are you travelling to? : "
#     end_station = gets.chomp
#     # binding.pry
#   end
#
#   if trip == "double"
#     print "What line are you starting on? : "
#     start_line = gets.to_s
#     print "What station are you boarding? : "
#     start_station = gets.to_s
#     print "What line are you ending on? : "
#     end_line = gets.to_s
#     print "What station are you travelling to? : "
#     end_station = gets.to_s
#   end
# end


# LOGIC IS WORKING

def single_trip (line, start_station, end_station )
  current_line = $lines[line]
  start_position = current_line.find_index(start_station)
  # p start_position
  end_position = current_line.find_index(end_station)
  # p end_position



  if start_position < end_position
    hop = current_line[start_position .. end_position]
    # single_line = line1.slice(index1, index2)
    response = "You must travel through the following stops on the #{ line } line: #{ hop.join(", ") }. #{ hop.length } stops."
  end

  if start_position > end_position
    reverse_hop = current_line[end_position .. start_position].reverse
    # p reverse_hop
    # p single_line
    response = "You must travel through the following stops on the #{ line } line: #{ reverse_hop.join(", ") }. #{ reverse_hop.length } stops."
  end
p response
end


def double_trip (start_line, start_station, end_line, end_station)

  single_trip start_line, start_station, "Union Square"
  p "Change at Union Square"
  single_trip end_line, "Union Square", end_station

end


# ASK USER FOR INPUT - NOT WORKING



# print "Input single for a trip on a single line or double for a trip covering two lines : "
# trip = gets.chomp
# p trip
# trip_input trip
# single_trip line, start_station, end_station


double_trip "N", "8th", "6", "Grand Central"
