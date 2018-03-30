require 'pry'
# MTA Lab
# Objectives:
# Apply your knowledge of Javascript to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
#
# // console.log() shows output similar to this:
# // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# // "Change at Union Square."
# // "Your journey continues through the following stops: 23rd, 28th, 33rd."
# // "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Javascript.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: indexOf())
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



# $lines = {
#   "N"=> ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
#   "L"=> ["8th", "6th", "Union Square", "3rd","1st"],
#   "6"=> ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
# }
#
# def single_trip (line,start_station,finish_station)
#
# current_line = $lines[line]
#  p start_position =  current_line.find_index(start_station)
#  p finish_position = current_line.find_index(finish_station)
#
#  hop = current_line[start_position..finish_position]
#  return hop #this line is not required cos its implictitly returned
# end
#
# def double_trip (start_line,start_station,finish_line,finish_station)
#   p single_trip start_line, start_station,"Union Square"
#   p single_trip finish_line,"Union Square",finish_position
# end
#
# binding.pry
#

$station = { "lineN"=>["Times Square", "34th", "28th", "23rd", "Union Square","8th"] ,
                  "lineL"=>["8th", "6th", "Union Square", "3rd", "1st"],
                  "line6"=>["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


# create a function called getStations with one parameter where we input the line.
# This returns all the stations in that line.
def getstations(line)
  $station[line]
# return current_line
end

# p getstations "lineN"
# p getstations "lineL"
# p getstations "line6"

def plantrip(startline,startlocation, endline, endlocation)
# displays the requirement
p "User wants to start on line:#{startline} from station: #{startlocation} and end on line: #{endline} on station: #{endlocation}."
startline_stations = getstations startline
endline_stations = getstations endline
#if startline and endline are the same
if(startline === endline)
stops =[]
# get the index of startline and endline
startlocationindex = startline_stations.find_index(startlocation)
endlocationindex = endline_stations.find_index(endlocation)
#  if the user is going backward, then reverse the array and list and count the stops
if(startlocationindex > endlocationindex)
reversestations = startline_stations.reverse # reverse the array
# get the new indices from the reversed array
r_startlocationindex = reversestations.find_index(startlocation);
r_endlocationindex = reversestations.find_index(endlocation);
# //slice the new array. plus1 in the end to add the last one
stops = reversestations[r_startlocationindex..r_endlocationindex]
else #if the user is going forwards
#show the stops
stops = startline_stations[startlocationindex..endlocationindex]
end
# Displaying the number of stops that user must travel
puts "You must travel through the following stops on the #{startline}: #{stops}."
# count the total number of stops
puts "#{stops.length} stops in total."

#*******************************************************************************
else
#If the user is getting on 2 lines
puts "StartLine and EndLine are different."
#get the index of the start location. End location will always be Union Square(intersection)
startlocation1index = startline_stations.find_index(startlocation)
endlocation1index = startline_stations.find_index("Union Square")
#if the user is going backwards
if(startlocation1index > endlocation1index)
#then reverse, get the index and slice. plus 1 to get the last station
reversestations1 = startline_stations.reverse
r_startlocationindex1= reversestations1.find_index(startlocation)
r_endlocationindex1= reversestations1.find_index("Union Square")
stops_part1 =reversestations1[r_startlocationindex1..r_endlocationindex1]
elsif #the user is going forwards
#Slice the array
stops_part1 = startline_stations[startlocation1index..endlocation1index]
end
#Display the first part of the journey.
puts "You must travel through the following stops on the #{startline}: #{stops_part1}"
puts "Change at Union Square"
#Part1 over
#starting Part2 which is the end line and end location.
#always starts at Union Square and ends with end location
startlocationindex2 = endline_stations.find_index("Union Square")
endlocationindex2 = endline_stations.find_index(endlocation)
#if the user is going backwards, then reverse,get index and slice the array
if(startlocationindex2 > endlocationindex2)
reversestations2 = endline_stations.reverse
r_startlocationindex2 = reversestations2.find_index("Union Square")
r_endlocationindex2 = reversestations2.find_index(endlocation)
stops_part2 = reversestations2[r_startlocationindex2+1..r_endlocationindex2]
else #if the user is going forward then display
stops_part2 = endline_stations[startlocationindex2+1..endlocationindex2]
end
#Display the second part of the journey.
puts "Your journey continues through the following stops: #{stops_part2}."
#get the total number of stops of part1 and part2
totStops = stops_part1.length + stops_part2.length;
puts "#{totStops} stops in total."

end
end

#******************************************************************************

print "Enter the Starting Line:"
start_line=gets.chomp

validate_station  = getstations start_line
while validate_station.nil?
  print "No such line! Try again:"

  start_line=gets.chomp
  validate_station  = getstations start_line
end

print "Enter the Starting Station:"
validate_startstation = gets.chomp

print "Enter the Ending Line:"
end_line= gets.chomp

validate_station  = getstations end_line
while validate_station.nil?
  print "No such line! Try again:"

  end_line=gets.chomp
  validate_station  = getstations end_line
end

print "Enter the Ending Station:"
validate_endstation = gets.chomp



  #
  # print "Enter your start line: "
  # line = gets.chomp
  # stations = lines[ line.to_sym ]
  # while stations.nil?
  #   print "No such line! Try again: "
  #   line = gets.chomp
  #   stations = lines[ line.to_sym ]
  # end
  #



plantrip(start_line,validate_startstation,end_line,validate_endstation)

puts $station
puts "*****************************************************"
puts "Option 1 - Same line - moving forwards"
#Option 1 - Same line - moving forwards
plantrip("lineL","6th","lineL","3rd");
puts "*****************************************************"
puts "Option 2 - Same line - moving backwards"
#Option 2 - Same line - moving backwards
plantrip("lineL","1st","lineL","8th");
puts "*****************************************************"
puts "Option 3 - Different lines - moving forward on both lines"
#Option 3 - Different lines - moving forward on both lines
plantrip("lineL","6th","line6","Astor Place");
puts "*****************************************************"
puts "Option 4 - Different lines - moving forward on first line and backward on second line"
#Option 4 - Different lines - moving forward on first line and backward on second line
plantrip("lineL","6th","line6","Grand Central")
puts "*****************************************************";
puts "Option 5 - Different lines - moving backward on first line and forward on second line"
#Option 5 - Different lines - moving backward on first line and forward on second line
plantrip("lineL","1st","line6","Astor Place");
puts "*****************************************************"
puts "Option 6 - Different lines - moving backwards on both lines"
#Option 6 - Different lines - moving backwards on both lines
plantrip("lineL","1st","line6","33rd");
puts "*****************************************************"
# binding.pry
