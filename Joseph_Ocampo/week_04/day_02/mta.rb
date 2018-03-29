# MTA Lab
# Objectives:
# Apply your knowledge of Ruby to solve a real world problem.
# Get really good at array manipulation.
# Activity
# Create a program that models a simple subway system.
#
# The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
#
# plan_trip 'N', 'Times Square', '6', '33rd' # This is only a suggested function name and signature.
#
# # `puts` shows output similar to this:
# # "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
# # "Change at Union Square."
# # "Your journey continues through the following stops: 23rd, 28th, 33rd."
# # "7 stops in total."
# There are 3 subway lines:
# The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
# The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
# The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
# All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
# Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
# Hints:
# Work out how you would do it on paper first! Then start to explain that process in Ruby.
# Get the program to work for a single line before trying to tackle multiple lines.
# Don't worry about prompting the user for input. Hard code some values to get it working. You can use gets later to make it more interactive.
# Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
# The key to the lab is finding the index positions of each stop. (hint: index)
# Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

require 'pry'

$lines = {
  "N" => ['Times Square','34th','28th','23rd','Union Square','8th'],
  "L" => ['8th','6th','Union Square','3rd','1st'],
  "6" => ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
}

def plan_trip
    # displays the timetable

    puts "MTA Trip Planner"

    puts "-=" * 40

    puts "N Times Square, 34th, 28th, 23rd, Union Square , 8th"
    puts "L 8th, 6th, Union Square, 3rd, 1st"
    puts "6 Grand Central , 33rd , 28th , 23rd , Union Square , Astor Place "

    puts "-=" * 40

    print "Start Stop Line: "
    line1name = gets.chomp
    line1 = $lines[line1name]

    print "Start Station:"
    start_stop = line1.find_index(gets.chomp)

    print "End Stop Line: "
    line2name = gets.chomp
    line2 = $lines[line2name]

    print "End Station:"
    last_stop = line2.find_index(gets.chomp)

    # union square transfers

    union_transfer = line1.find_index('Union Square')
    union_transfer2 = line2.find_index('Union Square')

    # conditional statments to check if start and end line are the same

    if line1name == line2name
        # check reverse or forward on line
        if start_stop > last_stop
          trip = line1[last_stop..start_stop].reverse
        else
          trip = line1[start_stop..last_stop]
        end

        puts "-=" * 40
        puts "You must travel through the following stops on the #{line1name} Line: #{trip.join(",")}"
        puts "#{trip.length} stops in total"
        puts "-=" * 40
    end

    if line1name != line2name
        # conditional to check reverse or forward on line
        # first part of trip
        if start_stop > union_transfer
          trip1 = line1[union_transfer..start_stop].reverse
        else
          trip1 = line1[start_stop..union_transfer]
        end

        # second part of trip
        if last_stop > union_transfer2
          trip2 = line2[union_transfer2..last_stop]
        else
          trip2 = line2[last_stop..union_transfer2].reverse
        end

        puts "-=" * 40
        puts "You must travel through the following stops on the #{line1name} Line: #{trip1.join(",")}"
        puts "Swap at Union Square"
        puts "Your journey continues through the following stops:#{trip2} on the #{line2name} line "
        puts "#{trip1.length+trip2.length} stops in total"
    end

end

binding.pry
