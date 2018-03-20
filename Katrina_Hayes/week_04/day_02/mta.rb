require 'pry'



def plan_trip line1, on_at, line2, off_at
  train_lines = {
    "N" => ["Times Square", "34th", "28th on the N", "23rd on the N", "Union Square on the N", "8th on the N"],
    "L" => ["8th on the L", "6th", "Union Square on the L", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th on the 6", "23rd on the 6", "Union Square on the 6", "Astor Place"]
  }

  ### Indices of stations on and off at
  index_on_at = train_lines[line1].index(on_at)
  p "index_on_at is #{index_on_at}" # TODO: remove later
  index_off_at = train_lines[line2].index(off_at)
  p "index_off_at is #{index_off_at}" # TODO: remove later
  index_switch = train_lines[line1].index("Union Square on the #{line1}")
  p "index_switch is #{index_switch}" # TODO: remove later

  ### Give name to the station to get off at for first_leg & deal with single_line trips so they can be dealt with in 'first_leg'
  unless line1 == line2
    switch_station = "Union Square on the #{line1}"
  else
    switch_station = off_at
    index_switch = index_off_at
  end

  ### Get num stops for single_line / first_leg
  num_stops_l1 = (index_on_at - index_switch).abs
  p "number of stops in first leg is #{num_stops_l1}"

  ### Get stop names for first_leg
  if index_on_at < index_switch
    stops_l1 = train_lines[line1][index_on_at+1..index_switch-1]
    p "stops for first leg are #{stops_l1}."
  else
    stops_l1 = train_lines[line1][index_switch+1..index_on_at-1].reverse
    p "stops for first leg are #{stops_l1}."
  end

  ### Final line - what will get returned
  trip_details_first_leg = "Get on at #{on_at}. You must travel on the #{line1} line through the following stops: #{stops_l1.join(', ')}. Then get off at #{switch_station}."
  trip_details_second_leg =
  trip_details_total_stops = "The total number of stops is #{num_stops_l1}."
  trip_details
end

plan_trip "N", "23rd on the N", "N",  "Times Square"
