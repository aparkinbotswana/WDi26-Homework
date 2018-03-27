require "pry"

$lines = {
  :lineN => ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  :lineL => ['8th', '6th', '28th', 'Union Square', '3rd', '1st'],
  :line6 => ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

def single_trip ( line, start_station, finish_station )

  current_lines = $lines[line]
  start_position = current_lines.find_index( start_station )
  finish_position = current_lines.find_index( finish_station )

  hop = current_lines[start_position .. finish_position].reverse
  return hop
end

def double_trip ( start_line, start_station, finish_line, finish_station )

  first_line = $lines[start_line]
  second_line = $lines[finish_line]
  start_position = first_line.find_index( start_station )
  finish_position = second_line.find_index( finish_station )
  hop = first_line[start_line .. find_index('Union Square')]
  hop = second_line[find_index('Union Square') .. finish_position]
  # p single_trip start_line, start_station, "Union Square"
  # p single_trip finish_line, "Union Square", finish_station
  return hop
end

p double_trip :lineN, "Times Square", :line6, "Astor Place"

# p " #{ single_trip(:lineN, "Times Square", "23rd") }"

# binding.pry
