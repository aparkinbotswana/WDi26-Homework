

def planTrip (startLine, start)

  trainLines = { # This had to go inside the function, otherwise indexStart wouldn't trigger properly
    "L" => ["8th on L", "6th", "Union Square on L", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th on 6", "23rd on 6", "Union Square on 6", "Astor Place"],
    "N" => ["Times Square", "34th", "28th on N", "23rd on N", "Union Square on N", "8th on N"]
   }

   indexStart = trainLines[startLine].find_index { |item| item == start}

puts "#{indexStart}"

end

planTrip("L", "6th")
