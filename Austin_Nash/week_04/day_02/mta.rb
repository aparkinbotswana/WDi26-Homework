def plan_trip
  lines = {
    "N" => ['Time Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    "L" => ['8th', '6th', 'Union Square', '3rd', '1st'],
    "6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  }

# user prompts
print "Enter your starting line : "
  start_line = gets.chomp
print "Enter your Starting Station : "
  start_station = gets.chomp
print "Enter your Ending Line : "
  end_line = gets.chomp
print "Enter your Ending Station : "
  end_station = gets.chomp

#find indexes based on user input needed for if statments
start_index = lines[start_line].index(start_station)
end_index = lines[end_line].index(end_station)
change_start_index = lines[start_line].index("Union Square")
change_end_index = lines[end_line].index("Union Square")

#when traveling on one line
if start_line == end_line
  if start_index < end_index
    trip1_stations_number = (start_index - end_index + 1).abs
    trip1_stations_names = lines[start_line][(start_index + 1) .. (end_index - 1)]
  end

  if start_index > end_index
    trip1_stations_number = (end_index - start_index + 1).abs
    trip1_stations_names = (lines[start_line][(end_index + 1) .. (start_index - 1)]).reverse
  end
  puts "You will stay on the #{start_line} line and travel past #{trip1_stations_number} stations, these are: #{trip1_stations_names}"
end

#when change line is needed
if start_line != end_line
  trip1_stations_number = (start_index - (change_start_index)).abs #plus one to inlcude Union Station, only do this for trip1 not trip2
  trip2_stations_number = (change_end_index - (end_index - 1)).abs
  total_trip_number = trip1_stations_number + trip2_stations_number
    if start_index < change_start_index && end_index > change_end_index # always traveling to the right
      trip1_stations_names = lines[start_line][(start_index + 1) .. (change_start_index)]
      trip2_stations_names = lines[end_line][(change_end_index + 1) .. (end_index - 1)] #plus one to not inlcude name - union station twice - only for trip 2
      total_trip_names = trip1_stations_names + trip2_stations_names
    end
    if start_index > change_start_index && end_index < change_end_index # always traveling to the left
      trip1_stations_names = lines[start_line][(change_start_index) .. (start_index - 1)].reverse
      trip2_stations_names = lines[end_line][(end_index + 1) .. (change_end_index - 1)].reverse
      total_trip_names = trip1_stations_names + trip2_stations_names
    end
    if start_index < change_start_index && end_index < change_end_index # trip 1 right, trip2 left
      trip1_stations_names = lines[start_line][(start_index + 1) .. (change_start_index)]
      trip2_stations_names = lines[end_line][(end_index + 1) .. (change_end_index - 1)].reverse
      total_trip_names = trip1_stations_names + trip2_stations_names
    end
    if start_index > change_start_index && end_index > change_end_index # trip 1 left, trip2 right
      trip1_stations_names = lines[start_line][(change_start_index) .. (start_index - 1)].reverse
      trip2_stations_names = lines[end_line][(change_end_index + 1) .. (end_index - 1)]
      total_trip_names = trip1_stations_names + trip2_stations_names
    end
  puts "Travel #{trip1_stations_number} stops on the #{start_line} line, change to the #{end_line} line at Union Station.
  Travel past #{trip2_stations_number} more stations. You will pass #{total_trip_number} stations in total on your trip.
  These stations will be: #{total_trip_names}, you will get off at #{end_station} station on the #{end_line} line."
end


end # end of top function


plan_trip
