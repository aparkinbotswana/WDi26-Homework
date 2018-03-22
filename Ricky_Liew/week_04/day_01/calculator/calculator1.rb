#require 'pry'

def addition
  print "What is the first number? "
  first = gets.to_f
  print "What is the second number? "
  second = gets.to_f

  puts "#{first} + #{second} = #{first + second}"
end

def subtraction
  print "What is the first number? "
  first = gets.to_f
  print "What is the second number? "
  second = gets.to_f

  puts "#{first} - #{second} = #{first - second}"
end

def multiplication
  print "What is the first number? "
  first = gets.to_f
  print "What is the second number? "
  second = gets.to_f

  puts "#{first} x #{second} = #{first * second}"
end

def division
  print "What is the first number? "
  first = gets.to_f
  print "What is the second number? "
  second = gets.to_f

  puts "#{first} / #{second} = #{first / second}"
end

def exponential
  print "What is the number? "
  first = gets.to_f
  print "What is the number to be exponential to? "
  second = gets.to_f

  puts "#{first} ^ #{second} = #{first ** second}"
end

def sqroot
  print "What is the number? "
  no = gets.to_f

  puts "The square root of #{no} is #{Math.sqrt(no)}"
end


def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - addition"
  puts "[b] - subtraction"
  puts "[c] - multiplication"
  puts "[d] - division"
  puts "[e] - exponential"
  puts "[f] - square root"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"
  # process the user_selection
  case user_selection
  when 'a'
    addition

  when 'b'
    subtraction

  when 'c'
    multiplication

  when 'd'
    division

  when 'e'
    exponential

  when 'f'
    sqroot

  else
    puts "invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase

end

puts "Thank you for using calculator"
