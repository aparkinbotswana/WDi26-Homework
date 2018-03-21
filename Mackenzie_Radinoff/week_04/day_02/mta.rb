trains = {
  "line n" => ["times", '34', '28', 'union', '8'],
  "line l" => ['8', '6', 'union', '3', '1'],
  "line 6" => ['grand', '33', '28', '23', 'union', 'astor']
}

print "What platform are you getting on? "
  start_platform = gets.to_s.downcase.chomp

print "What line are you getting on? "
  start_line = gets.to_s.downcase.chomp

print "What platform are you getting off? "
  end_platform = gets.to_s.downcase.chomp

print "What line are you getting off? "
  end_line = gets.to_s.downcase.chomp

find_on = (trains[start_line]).index(start_platform) ## Why is trains[start_line] unreadable?
find_union = (trains[start_line]).index("union")
find_off = (trains[end_line]).index(end_platform)
find_off_union = (trains[end_line]).index("union")
p find_on
if find_on < find_union
  find_to_union = (trains[start_line])[find_on..find_union]
end
if find_on > find_union
  find_to_union = (trains[start_line])[find_union..find_on].reverse!
end

if find_off < find_off_union
  find_from_union = (trains[end_line])[find_off..find_off_union].reverse!
end
if find_off > find_off_union
  find_from_union = (trains[end_line])[find_union..find_on]
end

if find_on < find_off
  find_to_same_line = (trains[start_line])[find_on..find_off]
else
  find_to_same_line = (trains[start_line])[find_on..find_off].reverse!
end
if start_line == end_line
  puts "You must travel through the following stops on the #{start_line}, #{find_to_same_line}"
end
if start_line != end_line
  puts "You must change at union"
  puts "Your stops on the #{start_line} line are #{find_to_union}"
  puts "Your stops on the #{end_line} are #{find_from_union}"
end
