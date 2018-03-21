# Calculator
# Explanation
# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Bonus


def show_menu
  puts "Calculator"

  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[r] - Square Root"
  puts "[e] - Exponent"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu

user_selection = gets.chomp.downcase

until user_selection == "q"
  #Read the next user user_selection

  case user_selection
  when 'a'
      print "enter the first number you want to add :"
      x = gets.to_f
      print "enter second number you want to add :"
      y = gets.to_f
      answer = x + y
      puts "The sum of #{x} and #{y} is #{answer}"
  when 's'
      print "enter the number you want to subtract from :"
      x = gets.to_f
      print "enter the number you want to subtract :"
      y = gets.to_f
      answer = x - y
      puts "#{x} minus #{y} is #{answer}"
  when 'm'
      print "enter the first number you want to multiply :"
      x = gets.to_f
      print "enter the second number you want to multiply :"
      y = gets.to_f
      answer = x * y
      puts "#{x} multiplied by #{y} is #{answer}"
  when 'd'
      print "enter the number you want divided :"
      x = gets.to_f
      print "enter the number you want to divide with :"
      y = gets.to_f
      answer = x / y
      puts "#{x} divided by #{y} is #{answer}"
    when 'r'
      print "enter the number that you want to find the square root of :"
      x = gets.to_f
      answer = Math.sqrt(x)
      puts "The square root of #{x} is #{answer}"
    when 'e'
      print "enter the base (number that you want to multiply by itself) :"
      x = gets.to_f
      print "enter the exponent(how many times you want to use the number in the multiplication) :"
      y = gets.to_f
      answer = x**y
      puts "#{x} to the power of #{y} is #{answer}"
    else
    puts "Invalid selection"
  end

show_menu

user_selection = gets.chomp.downcase

end

puts "Thank you for using this crappy calculator"
