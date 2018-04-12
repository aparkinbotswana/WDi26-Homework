require 'pry'


def single_trip ( line , start_station, finish_station )


  lines = {
  'N' => ["Times Square", "34th", "28thN", "23rd", "Union Square", "8thN"],
  'L' =>  ["8th", "6th", "Union Square", "3rd", "1st"],
  '6' => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }


  current_line = lines[line]
  start_position = current_line.index(start_station)
  finish_position = current_line.index(finish_station)

  if start_position < finish_position
    p current_line[start_position .. finish_position]
    else
    p current_line[finish_position .. start_position].reverse
  end

end



def double_trip ( start_line, start_station, finish_line, finish_station)

  p single_trip  start_line, star_station, "Union Square"
  p single_trip  finish_line, "Union Square", finish_station

end
