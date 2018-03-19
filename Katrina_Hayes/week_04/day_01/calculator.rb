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

require "rainbow"
require "pry"
# almost infinite loop. what do you want to do. say waht you want. add them together

def show_menu
  puts "\n"
  puts "Calculator Menu"
  puts "-" * 15
  puts "[a] - Addition" # come back and add more of these later as needed
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponents"
  puts "[r] - (square) Roots"
  puts "[q] - Quit"
  puts "\n"
  print "Enter your menu selection: "
  # puts "\n"
end

show_menu

#then need to do loop and process user's choice

user_selection = gets.chomp.downcase

until user_selection == "q"
  # Process the selection (i.e. if they say they want addition, do it)
  case user_selection
  when 'a'
    puts "Addition"
    print "Enter first number for addition: "
    first_number = gets.to_i
    total = first_number
    print "Enter second number for addition: "
    second_number = gets.to_i
    total += second_number
    print "Running total is #{total}.\n"
    print "Another number for addition? (y/n): "
    answer = gets.chomp.downcase
    until answer == "n"
      print "\nEnter next number for addition: "
      number = gets.to_i
      total += number
      puts "Running total is #{total}."
      print "Another number for addition? (y/n): "
      answer = gets.chomp.downcase
    end
    puts "Total is #{total}."

  when 's'
    puts "Subtraction"
    print "Enter first number for subtraction: "
    first_number = gets.to_i
    total = first_number
    print "Enter second number for subtraction: "
    second_number = gets.to_i
    total -= second_number
    print "Result is #{total}.\n"

  when 'm'
    puts "Multiplication"
    print "Enter first number for multiplication: "
    first_number = gets.to_i
    print "Enter second number for multiplication: "
    second_number = gets.to_i
    total = first_number * second_number
    print "Result is #{total}.\n"

  when 'd'
    puts "Division"
    print "Enter first number for division: "
    first_number = gets.to_i
    print "Enter second number for division: "
    second_number = gets.to_i
    total = first_number / second_number
    print "Result is #{total}.\n"

  when 'e'
    puts "Exponents"
    print "Enter a number to get exponents of: "
    number = gets.to_i
    print "To what power do you want your first number calculated to?: "
    power = gets.to_i
    total = number ** power
    print "Result is #{total}.\n"

  when 'r'
    puts "(Square) Roots"
    print "Enter the number for which you want the square root: "
    number = gets.to_i
    result = Math.sqrt(number)
    print "Result is #{result}.\n"

  else
    puts "Invalid selection.\n"
  end
  # Show the menu again
  show_menu
  # Read the next user selection
  user_selection = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."
