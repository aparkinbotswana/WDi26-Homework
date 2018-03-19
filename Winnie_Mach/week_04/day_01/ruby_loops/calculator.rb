require "rainbow"
require "pry"

# binding.pry
def show_menu
  puts "-=" * 40
  puts "Basic Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[q] - Quit"
  puts "-=" * 40
  puts "Advanced Calculator"
  puts "-=" * 40
  puts "[e] - Exponents"
  puts "[sr] - Square Root"
  puts "[mortgage] - Mortgage Calculator"
  puts "[bmi] - BMI Calculator"
  puts "[trip] - Trip Calculator"
  print "Enter your menu selection: "
end

########### MY FUNCTIONS ################

# Addition Function
def addition(a, b)
  a + b
end

# Subtraction Function
def subtraction(a, b)
  a - b
end

# Multiplication Function
def multiplication(a, b)
  a * b
end

# Division Function
def division(a, b)
  a / b
end

# Exponent Function
def exponent(a, b)
  a ** b
end

# Square Root Function
def square_root(a)
  Math.sqrt(a)
end

# Mortgage Function
 ## Formula: m = p (r(1+r)^ n / (1+r) ^n - 1))
   # p = loan_amount
def mortgage(loan_amount, r, n)
  v = addition(1, r) # (1 + r)
  w = exponent(v, n) #(1+ r)^n
  x = multiplication(r, w) # r(1+r)^n
  y = subtraction(w, 1) # (1+r)^n - 1
  z = division(x, y) # r(1+r)^n / (1+r)^n -1
  m = multiplication(loan_amount, z) # p * (r(1+r)^n / (1+r)^n -1 ))
  m.round(2) #rounding to 2 decimal places
end

# BMI Function  weight/height^2
def bmi(height, weight)
  division(weight, exponent(height, 2))
  ##division function with 2 arguments:
  # 1. weight
  # 2. exponent function with 2 arguments:
    # - height
    # - 2 (height^ 2)
end

# Trip Function
  def trip_time(distance, speed)
    division(distance, speed)
  end  #time = distance/speed

  def trip_cost(distance, litres_per_km, cost_per_litre)
    step1 = division(distance, 100)
    step2 = multiplication(step1, litres_per_km)
    step3 = multiplication(step2, cost_per_litre)
    step3.round(2)
  end


show_menu #calling the function
user_selection = gets.chomp.downcase


#this is a loop. So will keep displaying the menu until user types q.

until user_selection == "q"
# Process the selection
# Show menu again
# Read the next user selection
  case user_selection
  when 'a'
      print "Please enter the first number : "
      a = gets.to_i
      print "Please enter the second number: "
      b = gets.to_i
      puts "The sum #{a} and #{b} is #{addition a, b}."
  when 's'
    print "Please enter the first number : "
    a = gets.to_i
    print "Please enter the second number :"
    b = gets.to_i
    puts "#{a} minus #{b} is #{subtraction a, b}."
  when 'm'
    print "Please enter the first number: "
    a = gets.to_i
    print "Please enter the second number: "
    b = gets.to_i
    puts "#{a} multiplied by #{b} is #{multiplication a, b}."
  when 'd'
    print "Please enter the first number: "
    a = gets.to_i
    print "Please enter the second number: "
    b = gets.to_i
    puts "#{a} divided by #{b} is #{division a, b}."
when 'e'
  print "Please enter the first number: "
  a = gets.to_i
  print "Please enter the second number: "
  b = gets.to_i
  puts "#{a} to the power of #{b} is #{exponent a, b}."
when 'sr'
  print "Please enter your number: "
  a = gets.to_i
  puts "The square root of #{a} is #{square_root a}"
when 'mortgage'
  print "What is the total amount of your loan? :"
  loan_amount = gets.to_i
  print "What is your monthly interest rate? :"
  r = gets.to_f
  print "What is the total number of payments you are going to make? (number of months you'll be paying the loan for) :"
  n = gets.to_i
  puts "For a loan of #{loan_amount}, paying over #{n} months with an interest rate of #{r}%, you'll be required to pay $#{mortgage loan_amount, r, n} every month."

when 'bmi'
  print "What is your weight in kg? :"
  weight = gets.to_i
  print "What is your height in metres? :"
  height = gets.to_f
  puts "Your BMI is #{bmi height, weight}. You are obese."
when 'trip'
  print "What is the distance of the trip in km? :"
  distance = gets.to_f
  print "How many litres of fuel would you use per km? :"
  litres_per_km = gets.to_f
  print "How much will it cost per litre? :"
  cost_per_litre = gets.to_f
  print "What is your speed in km per hour? :"
  speed = gets.to_i
  puts "The total time of your trip is #{trip_time distance, speed} hours."
  puts "The total cost of your trip is $#{trip_cost distance, litres_per_km, cost_per_litre}."
else
  puts "Invaid selection"
end

  show_menu
  user_selection = gets.chomp.downcase
end
#### end loop #####
puts "Thank you for using crappy calculator."
