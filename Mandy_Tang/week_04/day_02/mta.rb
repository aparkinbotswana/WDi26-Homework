begin

puts "Which station are you getting on at?"
start = gets.chomp.split.map(&:capitalize).join(' ') # Capitalise each word in user's input so if they are lazy and type 'times square', it will still work
puts "What line is #{start} on?" # Reminding user what station they entered
startLine = gets.chomp.upcase
puts "Which station are you getting off at?"
finish = gets.chomp.split.map(&:capitalize).join(' ')
puts "What line is #{finish} on?"
finishLine = gets.chomp.upcase


def planTrip (startLine, start, finishLine, finish)

  trainLines = { # This had to go inside the function, otherwise indexStart wouldn't trigger properly
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"]
   }

  indexStart = trainLines[startLine].find_index(start) # This is a longer way that also works: indexStart = trainLines[startLine].find_index { |item| item == start}
   # puts "#{indexStart}"

   if startLine == finishLine
     indexTransfer = trainLines[startLine].find_index(finish) # The index of your ending station
   else
     indexTransfer = trainLines[startLine].find_index("Union Square") # Your ending station on the starting line is always Union Square if you are switching lines
   end

   numStopsL1 = indexStart - indexTransfer

   if numStopsL1 < 0
     numStopsL1 = numStopsL1 * -1
   end

   if indexStart < indexTransfer # If true, the train is going forwards in the same direction as the array
     # Slice out the stops we want so we can print them to screen
     stopsL1 = trainLines[startLine] [indexStart..indexTransfer] # TIL: Ranges take indices, not element names
     stopsL1.shift # Removing the first element since this is the stop we're getting on at
   else
      stopsL1 = trainLines[startLine] [indexTransfer..indexStart].reverse # Reverse the order of stops if travelling backwards
      stopsL1.shift
   end

   if startLine == finishLine
     puts "Get on at #{start}.\nYou must travel on the #{startLine} line through the following stops: #{stopsL1.join(', ')}.\nGet off at #{finish}.\nThere are #{numStopsL1} stops in total."
     return
   end

# If we're switching lines...
  indexTransfer2 = trainLines[finishLine].find_index("Union Square") # indexTransfer2 is the position of Union Square on the destination line
  indexFinal = trainLines[finishLine].find_index(finish)

  numStopsL2 = indexTransfer2 - indexFinal
  if numStopsL2 < 0
    numStopsL2 = numStopsL2 * -1;
  end

  if indexTransfer2 < indexFinal
    stopsL2 = trainLines[finishLine] [indexTransfer2..indexFinal]
    stopsL2.shift
  else
    stopsL2 = trainLines[finishLine] [ indexFinal..indexTransfer2 ].reverse
    stopsL2.shift
  end

  if start == "Union Square" # Creating more sensible output when you board at the intersection
      puts "Get on at #{start}.\nTake the #{finishLine} line and travel through the following stops: #{stopsL2.join(', ')}.\nGet off at #{finish}.\nThere are #{numStopsL1 + numStopsL2} stops in total."
  else
    puts "Get on at #{start}.\nYou must travel on the #{startLine} line through the following stops: #{stopsL1.join(', ')}.\nChange at Union Square.\nYour journey continues through the following stops on the #{finishLine} line: #{stopsL2.join(', ')}.\nGet off at #{finish}.\nThere are #{numStopsL1 + numStopsL2} stops in total."
  end
end

 planTrip(startLine, start, finishLine, finish)

 rescue
   # Error handling - if the user's input isn't correct, they are told their selection is invalid and prompted for input again
     puts "Sorry, we can't find your station or line. Please try again."
     puts "Which station are you getting on at?"
     start = gets.chomp.split.map(&:capitalize).join(' ') # Capitalise each word in user's input so if they are lazy and type 'times square', it will still work
     puts "What line is #{start} on?" # Reminding user what station they entered
     startLine = gets.chomp.upcase
     puts "Which station are you getting off at?"
     finish = gets.chomp.split.map(&:capitalize).join(' ')
     puts "What line is #{finish} on?"
     finishLine = gets.chomp.upcase

     planTrip(startLine, start, finishLine, finish)
end

# planTrip("L", "3rd", "N", "34th")
