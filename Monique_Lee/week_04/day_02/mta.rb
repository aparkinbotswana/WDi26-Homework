# MTA Lab
# Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.
#
# The program takes the line and station that a user is getting on at and the line and station that user is getting off at and prints the journey and the total number of stations for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stations on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stations: 23rd, 28th, 33rd."
# # "7 stations in total."
# There are 3 subway lines:
# The N line has the following stations: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stations: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stations: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th station on the N line is different than the 28th street station on the 6 line, so you'll have to differentiate this when you name your stations in the arrays.)
# Tell the user the number of stations AND the stations IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stations and intersection.
# The key to the lab is finding the index positions of each station. (hint: index)
# Make sure the stations that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

#could create MTA lines as a class and initialize the function - def initialize @lines= {lines + stop arrays}

require 'pry'

def plan_single_trip (start_line, first_station, last_station)

  mta = {
  'N' => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  '6' => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
  'L' => ['8th', '6th','Union Square','3rd','1st']
  }

  print "Enter the line that you will start your trip on : "
  start_line = gets.chomp
  print "Enter the station that you will get on the train at : "
  first_station = gets.chomp
  print "Enter the line that you will end your trip on : "
  end_line = gets.chomp
  print "Enter the last station that you will exit the train at : "
  last_station = gets.chomp

  current_line = mta[start_line]
  start_position = current_line.index(first_station)
  finish_position = current_line.index(last_station)

  hop = current_line[start_position+1 .. finish_position] #can use ... up to not including
  num_stops = hop.length

  if start_position < finish_position
      puts "You will need to pass through the following stations #{hop}"
      puts "#{num_stops} stations in total"
  end

  if finish_position > start_position
    num_stops = reverse_hop.length
    puts "You will need to pass through the following stations #{reverse_hop}"
    puts "#{num_stops} stations in total"
  end

end

#plan_single_trip "N", "Times", "8th"

def plan_transfer_trip (start_line, first_station, end_line, last_station)

  #if start_line != end_line

    p plan_single_trip start_line, first_station, "Union Square"
    p plan_single_trip end_line, "Union Square", last_station

    puts "You will need to pass through the following stations #{plan_transfer_trip}"
    puts "#{hop.length} stations in total"
  end

end

#plan_transfer_trip "N", "Times", "L", "1st"




#binding.pry
