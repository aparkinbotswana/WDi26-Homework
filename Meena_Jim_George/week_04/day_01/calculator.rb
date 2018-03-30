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
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
#  repl_bonus.md
# Bonus Challenge
# Do-It-Yourself Ruby REPL
# Try to create your own Ruby REPL (Read Evaluate Print Loop) program.
#
# It should show a prompt, read some Ruby code from the user, evaluate their code, print the result and loop back to the start.
#
# Sample Session
# $ ruby repl.rb
# Welcome to Ruby REPL
# > 2 + 7
# 9
# > "some" + "string"
# "somestring"
# >



def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponents"
  puts "[sq] - Squareroot"
  puts "[q]- Quit"
  print "Enter your menu selection:"
end
show_menu

user_selection = gets.chomp.downcase
# def input_num
#   puts "whats your first number?:"
#   first_num = gets.to_i
#   puts "whats your second number?:"
#   sec_num = gets.to_i
# end
until user_selection == "q"
  #Process the selection
  #show menu
  #Read the next user selection
case user_selection

when "a"
   puts "Addition"
   puts "whats your first number?:"
   first_num = gets.to_i
   puts "whats your second number?:"
   sec_num = gets.to_i
   total = first_num +sec_num
   puts "#{first_num} + #{sec_num} = #{total}"

when "s"
   puts "Subtraction"
   puts "whats your first number?:"
   first_num = gets.to_i
   puts "whats your second number?:"
   sec_num = gets.to_i
   total = first_num - sec_num
   puts "#{first_num} - #{sec_num} = #{total}"

when "m"
   puts "Multiplication"
   puts "whats your first number?:"
   first_num = gets.to_i
   puts "whats your second number?:"
   sec_num = gets.to_i
   total = first_num * sec_num
   puts "#{first_num} * #{sec_num} = #{total}"

when "d"
  puts "Division"
  puts "whats your first number?:"
  first_num = gets.to_i
  puts "whats your second number?:"
  sec_num = gets.to_i
  total = first_num/sec_num
  puts "#{first_num} / #{sec_num} = #{total}"

when "e"
  puts "Exponents"
  puts "whats your first number?:"
  first_num = gets.to_i
  puts "whats your second number?:"
  sec_num = gets.to_i
  total = first_num ** sec_num
  puts "#{first_num} ** #{sec_num} = #{total}"

when "sq"
  puts "Square root"
  puts "Enter a number:"
  first_num = gets.to_i
  square_root = Math.sqrt(first_num)
  # square_root = cmath.sqrt(first_num)
  puts "the squareroot of #{first_num} is #{square_root}"
else

when "bmi"
puts "bmi"
puts "What is your height in metres?"
m = gets.chomp.to_f
puts "What is your weight in kg?"
kg = gets.chomp.to_f
def BMI (m,kg)
kg/(m*m)
end

puts "Your BMI is #{BMI(m,kg)}."
  puts "Invalid selection"

end

show_menu
user_selection = gets.chomp.downcase
end


puts "Thankyou for using crappy calculator"
