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
end

show_menu

#then need to do loop and process user's choice

user_selection = gets.chomp.downcase

until user_selection == "q"
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

puts "Thank you for using this crappy calculator."

# Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)

def calculate_repayment
  puts "\n"
  puts "Mortgage Calculator"
  puts "-" * 15
  print "Enter loan amount in AUD: $"
  loan_amount = gets.to_f
  print "Enter loan period in years: "
  loan_period = gets.to_i * 12
  print "Enter the interest rate in percentage per annum: "
  interest_rate = gets.to_f/100
  total_interest = interest_rate * loan_amount
  total_payment = total_interest + loan_amount
  monthly_payment = total_payment / loan_period
  puts "Monthly interest repayments are $#{monthly_payment}, assuming you only get charged interest once at the start of the loan life."
end

calculate_repayment

# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

def calculate_bmi
  puts "\n"
  puts "BMI Calculator"
  puts "-" * 15
  print "Enter height in metres: "
  height = gets.to_f
  print "Enter weight in kg: "
  weight = gets.to_f
  bmi = (weight/height)/height
  puts "Your bmi is #{bmi}."
  if bmi < 20
    puts "Your bmi is lower than the healthy range of 20-25, indicating you may be underweight."
  elsif bmi > 25
    puts "Your bmi is higher than the healthy range of 20-25, indicating you may be overweight."
  else
    puts "Your bmi is in the healthy range of 20-25, indicating you are a healthy weight."
  end
end

calculate_bmi

# Trip Calculator
# Calculate a trip time and cost given inputs for
#
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

def calculate_trip_details
  puts "\n"
  puts "Trip Calculator"
  puts "-" * 15
  print "Enter distance of trip in kilometres: "
  distance = gets.to_f
  print "Enter distance you can travel per litre of petrol in kilometres: "
  fuel_use = gets.to_f
  print "Enter cost of petrol in $ per litre: $"
  petrol_cost = gets.to_f
  print "Enter average speed you'll drive in kilometres per hour: "
  speed = gets.to_f
  trip_time = distance/speed
  puts "Your trip will take #{trip_time} hours."
  litres_needed = distance/fuel_use
  cost = litres_needed * petrol_cost
  puts "Your trip will cost $#{cost}."
end

  calculate_trip_details
