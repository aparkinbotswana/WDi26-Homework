  require 'pry'

$lines = {
  'N' => ["times square", "34th", "28th_N", "23rd_N", "union square", "8th_N"],
  'L' => ["8th_L", "6th", "union square", "3rd", "1st"],
  '6' => ["grand central", "33rd", "28th_6", "23rd_6","union square", "astor place"]
  }

# plan_trip
# what type of trip is it
  # plan_trip = single_trip OR ||&& double_trip?????

  # single_trip
  # what line you on?
    print "What train line are you on now?"
      current_line = $lines [line]
# which station are you starting from?-
    print "What station are you starting from? "
      start_station = gets.chomp
# if only one line
    print "This is your station"
      end_station = gets.chomp


      def single_trip ( line, start_station, finish_station )

      current_line = $lines [line]

      start_position = current_line.find_index(start_station)
      finish_position = current_line.find_index(finish_station)

        hop = current_line[start_position .. finish_position]
        return hop
      end

    single_trip
# call functon

binding.pry


#else we need to change at union stations
  print "You need to change train at union station"
  union station = gets.chomp
  print "What will be the second train line? "
  line = gets.chomp
# where are we going to finsh station
  print "What is you end station? "
  finish_station = gets.chomp


def double_trip (start_line, start_station, finish_line, finish_station)

   single_trip start_line, start_station, "union square"
   double_trip finish_line, "union square", finish_station

end

# number of stops
  print "You will have x number of stops"

# order of stops
  print "Your order of stops will be"
  # sort reverse or normal order?
