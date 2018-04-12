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

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

# Trip Calculator
# Calculate a trip time and cost given inputs for

# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[r] - Square root"
  puts "[e] - Exponents"
  puts "[morgage] - Morgage"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

def add
  print "Number 1: "
  num1 = gets.to_i
  print "Number 2: "
  num2 = gets.to_i
  print "Total = #{num1+num2}"
end

def subtract
  print "Number 1: "
  num1 = gets.to_i
  print "Number 2: "
  num2 = gets.to_i
  print "Total = #{num1-num2}"
end

def multiply
  print "Number 1: "
  num1 = gets.to_i
  print "Number 2: "
  num2 = gets.to_i
  print "Total = #{num1*num2}"
end

def divide
  print "Number 1: "
  num1 = gets.to_i
  print "Divided By: "
  num2 = gets.to_i
  print "Total = #{num1/num2}"
end

def sqrt
  print "Number 1: "
  num1 = gets.to_i
  print "Total = #{ Math.sqrt(num1)}"
end

def expo
  print "Number 1: "
  num1 = gets.to_i
  print "To the power of?: "
  num2 = gets.to_i
  print "#{num1} to the power of #{num2} = #{num1**num2}"
end

def morgage
  print "Principle: "
  principle = gets.to_i
  print "Annual Interest Rate: "
  r = (gets.to_f/100)/12
  print "Years: "
  n = gets.to_i*12
  m = principle*(r*(1+r)**n)/((1+r)**n-1)
  print "The monthly repayment is #{m}"
end


show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

  case user_selection
  when 'a'
    puts add
  when 's'
    puts subtract
  when 'm'
    puts multiply
  when 'd'
    puts divide
  when 'r'
    puts sqrt
  when 'e'
    puts expo
  when 'morgage'
    puts morgage
  else
    puts "Invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."
