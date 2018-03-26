require 'pry'

$train_lines = {
  :line_N => ['Times Square', '34th', '28th(N)', '23rd(N)', 'Union Square', '8th(N)'],
  :line_L => ['8th(L).', '6th', 'Union Square', '3rd', '1st'],
  :line_6 => ['Grand Central', '33rd', '28th(6).', '23rd(6)', 'Union Square', 'Astor Place']
}

def plan_trip_single start_line, start_station, end_station
  current_line = $train_lines[start_line]
  start_index = current_line.index(start_station)
  end_index = current_line.index(end_station)

  # p current_line
  # p start_index
  # p end_index

  hop = current_line[start_index ... end_index]
  # p hop

  if end_index < start_index
    hop = current_line[start_index ... end_index].reverse

  return hop
  end

end


def plan_trip_double start_line, start_station, end_line, end_station

  plan_trip_single [start_line, start_station, "Union Square"]
  plan_trip_single [end_line, "Union Square", end_station]

end

p plan_trip_single $train_lines[:line_N], 'Times Square', '23rd'

#
# def plan_trip (start_line, start_station, end_line, end_station)
#
#
#     stops1 = []
#
#
#     start_index = $train_lines[line_N].index(start_station)
#       # // startIndex = 0
#
#
#     end_index = $train_lines[line_N].index(end_station)
#     # // endIndex = 5
#
#
#     # // if station 2 is after station 1
#
# if end_index < start_index
#
#   stops = $train_lines[line_N]
#   stops1 = stops.slice(end_index, start_index).reverse()
#
#   puts "You must travel through the following stops on the N line: #{stops1} to get to #{endStation}."
#
#
#   # // if station 2 is before station 1
# else end_index > start_index
#     stops = $train_lines[line_N]
#     stops1 = stops.slice(start_index, end_index)
#
#     puts "You must travel through the following stops on the N line: #{stops1} to get to #{endStation}."
#
# end
#
#
# # // console.log("distance = " + stops1.length);
# puts "#{stops1.length} stops in total"
#
# end
