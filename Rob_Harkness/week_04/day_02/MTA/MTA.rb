# TODO: make method to pretty print directions,
# TODO: work out how to route across multiple lines if first line does not intersect with last line
require('pry')
# MTA class
#
class MTA
  def initialize
    @lines = {
      N: ['Times Square', '34th', '28th(N)', '23rd(N)', 'Union Square', '8th(N)'],
      L: ['8th(L)', '6th', 'Union Square', '3rd', '1st'],
      SIX: ['Grand Central', '33rd', '28th(6)', '23rd(6)', 'Union Square', 'Astor Place'],
      new_line: ['1st stop', '33rd', '2nd', 'cool stop', '2nd last', 'end-stop']
    }
  end

  def test
    p (@lines[:N] + @lines[:L] + @lines[:SIX] + @lines[:new_line])
  end

  def trip(l_one, start, l_two, stop)
    l_one = l_one.to_sym
    l_two = l_two.to_sym
    start_index = @lines[l_one].index(start)
    end_index = @lines[l_two].index(stop)
    change_stop = [stop]
    continue_stop_index = -1

    unless l_one == l_two
      change_stop = (@lines[l_one] & @lines[l_two])
      continue_stop_index = @lines[l_two].index(change_stop.join(''))
    end
    change_stop_index = @lines[l_one].index(change_stop.join(''))

    part_one = if start_index > change_stop_index
                 @lines[l_one][change_stop_index..start_index].reverse!
               else
                 @lines[l_one][start_index..change_stop_index]
               end

    part_two = if continue_stop_index > end_index
                 @lines[l_two][end_index..continue_stop_index].reverse!
               else
                 @lines[l_two][continue_stop_index..end_index]
               end

    change_stop.join('') == stop && change_stop = []

    {
      trip_part_one: part_one,
      trip_part_two: part_two,
      full_trip: part_one | part_two,
      changes: change_stop.length,
      change_stops: change_stop
    }
  end
end
