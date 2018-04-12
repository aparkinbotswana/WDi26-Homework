require 'pry'
$journey =''
$noofstops=0
$path = {
  "LineN" => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "LineL" => ['8th', '6th', 'Union Square', '3rd', '1st'],
  "Line6" => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'],
}

def trackLoc firstIndex1, secIndex1, lineNo1
  if firstIndex1 > secIndex1
    i = firstIndex1
    while i >= secIndex1 do
      $journey += $path[lineNo1][i]
      $journey += ", "
      $noofstops += 1
      i -=1
    end
  else
     i = firstIndex1
      while i <= secIndex1 do
        $journey += $path[lineNo1][i]
        $journey += ", "
        $noofstops += 1
         i+=1
      end
  end
    # journey = journey.slice(0, -2);
end
def plantrip(startLine, startStop, endLine, endStop)


  instpoint = "Union Square"

  firstIndex = $path[startLine].index(startStop)
  secIndex = $path[endLine].index(endStop)
  # p firstIndex
  # p secIndex

  #  if starting and stopping point is same as intersection point i.e union square.
  if (startStop == instpoint && endStop == instpoint)
      $journey = "You are already at ${instpoint}. Change to Line: #{endLine}"
      puts($journey);
  else
    if startLine == endLine
        $journey = "You must travel through the following stops on line #{startLine} :"
        trackLoc(firstIndex, secIndex, startLine);
    else
        $journey = "You must travel through the following stops on line #{startLine} :"
        instindex = $path[startLine].index(instpoint);
        trackLoc(firstIndex, instindex, startLine);
        instindex = $path[endLine].index(instpoint);
        if secIndex != instindex
          $journey += "\nChange at #{instpoint} to Line: #{endLine}.\nYour journey continues through the following stops:"
          if (instindex < secIndex)
            trackLoc(instindex + 1, secIndex, endLine)
          else
            trackLoc(instindex - 1, secIndex, endLine)
          end

        else
            $journey += "\n You are already at ${instpoint}. Change to Line: #{endLine}"
        end
    end
  end
  puts"There are #{$noofstops} Stops in Total. #{$journey}"
end







def show_menu
  puts "Trip"
  puts"-=" * 40
  puts"[Line N]"
  puts"[Times Square][34th][28th][23rd][Union Square][8th]"
  puts"--" * 40
  puts"[Line L]"
  puts"[8th][6th][Union Square][3rd][1st]"
  puts"--" * 40
  puts"[Line 6]"
  puts"[Grand Central][33rd][28th][23rd][Union Square][Astor Place]"
  puts"--" * 40
  puts"[q]-Quit"
  puts"-=" * 40
  print "Enter start line:"
  stline = gets.chomp
  print "Enter staring Stop:"
  ststop = gets.chomp
  print "Enter the destination line:"
  endline = gets.chomp
  print "Enter the destination stop:"
  endstop = gets.chomp
  plantrip(stline,ststop,endline,endstop)
end

show_menu()


binding.pry
