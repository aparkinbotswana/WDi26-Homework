require_relative 'MTA'
new_trip = MTA.new
# p new_trip

def show_trip_plan(trip)
  puts trip[:trip_part_one]
  if trip[:changes] > 0
    puts "Change at: #{trip[:change_stops]}"
    puts trip[:trip_part_two]
  end
  puts "Stops: #{trip[:full_trip].length}"
  # puts "#{trip[:changes]} change"
end

new_trip.test

# show_trip_plan new_trip.trip('SIX', 'Astor Place', 'L', '8th(L)')
# p new_trip.trip('SIX', 'Grand Central', 'L', '1st')
# p new_trip.trip('new_line', 'end-stop', 'SIX', 'Astor Place')
# show_trip_plan new_trip.trip('SIX', 'Grand Central', 'SIX', 'Astor Place')
# show_trip_plan new_trip.trip('new_line', 'end-stop', 'SIX', 'Grand Central')


