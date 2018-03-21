require_relative 'MTA'
new_trip = MTA.new
p new_trip.trip('SIX', 'Astor Place', 'L', '8th(L)')
p new_trip.trip('SIX', 'Grand Central', 'L', '1st')
p new_trip.trip('new_line', 'end-stop', 'SIX', 'Astor Place')
p new_trip.trip('SIX', 'Grand Central', 'SIX', 'Astor Place')

# p new_trip.trip('new_line', 'end-stop', 'N', 'Union Square')
