def show_menu
  puts "calculator"
  puts "<>" * 40
  puts "[a] - Addition"
  puts "[s] - subtraction"
  puts "[m] - multiply"
  puts "[d] - division"
  puts "[q] - Quit"
  puts "[g] - Advanced Calculator"
  print "Enter your menu selection: "
end

show_menu # calling the method

user_selection = gets.chomp.downcase # declaring a avariable


until user_selection == "q"
# process the selection

case user_selection
when 'a'
  a = 4
  b = 6

  puts "the value of addition is #{ a + b }"
when 's'
  a = 4
  b = 10
  puts " the value of subtraction is #{ a - b}"
when 'm'
  a = 14
  b = 10
  puts "the value of multiply is #{ a * b}"
when 'd'
  a = 14
  b = 30
  puts "the value of division is #{ a / b}"
else
  puts "invalid selection"
end

#show the menu
# read the next selection


show_menu
user_selection = gets.chomp.downcase
end


puts "thankyou for using crappy calculator."

def show_cal

  puts "Advanced Calculator"
  puts "<>" * 40
  puts "[e] - exponential"
  puts "[sq]- square roots"
  print "Enter your menu selection: "

end

show_cal
user_selection = gets.chomp.downcase

until user_selection == "g"

  case user_selection
  when 'e'
    a = 5
    b = 9
    puts "the value of exponential is #{ Math.log(a)} "
    puts "the value of exponential is #{ Math.log(b)} "

 when 'sq'
   a = 4
   b = 7
   puts "the value of a and b are #{ a ** b }"
else
  puts "invalid selection"
end

show_cal
user_selection = gets.chomp.downcase
end

puts "end"



#puts "thankyou for using crappy calculator."
