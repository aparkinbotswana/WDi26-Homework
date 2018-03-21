require 'rainbow'

def add
  print "What's the first number? "
  first = gets.to_f
  print "What's the second number? "
  second = gets.to_f
  puts Rainbow("#{first} + #{second} is #{first + second}").underline.yellow
end

def subtract
  print "What's the first number? "
  first = gets.to_f
  print "What's the second number? "
  second = gets.to_f
  puts Rainbow("#{first} - #{second} is #{first - second}").underline.yellow
end

def multiply
  print "What's the first number? "
  first = gets.to_f
  print "What's the second number? "
  second = gets.to_f
  puts Rainbow("#{first} x #{second} is #{first * second}").underline.yellow
end

def division
  print "What's the first number? "
  first = gets.to_f
  print "What's the second number? "
  second = gets.to_f
  puts Rainbow("#{first} / #{second} is #{first / second}").underline.yellow
end

def bmi
  print "What's your weight in Kg? "
  weight = gets.to_f
  print "What's your height in meter? "
  height = gets.to_f
  puts Rainbow("Your BMI is #{weight / height / height}").underline.yellow
end

def exponent
  print "What's the first number? "
  first = gets.to_f
  print "What's the second number? "
  second = gets.to_f
  puts Rainbow("The exponent of #{first} and #{second} is #{first ** second}").underline.yellow
end

def sqrt
  print "What's the number? "
  number = gets.to_f
  for i in 1..number
    if number / i == i
      puts Rainbow("The square root of #{number} is #{i}").underline.yellow
    end
  end
end

def monthly_mortgage
  print "Enter the principle of your loan: "
  principle = gets.chomp.to_f
  print "What's your interest rate? :"
  interest = gets.chomp.to_f
  print "Enter the number of your payments: "
  num_payments = gets.chomp.to_i

  monthly_payment = ((1 + interest) ** num_payments) * interest / (((1 + interest) ** num_payments) - 1) * principle
  puts Rainbow("The monthly payment of your mortgage is $#{monthly_payment} dollars.").underline.yellow
end



def show_menu
  puts Rainbow("Calculator").underline.red
  puts Rainbow("-=" * 40).white
  puts "[a] - Addition"
  puts "[s] - Substract"
  puts "[m] - Multipl"
  puts "[d] - Division"
  puts "[b] - BMI"
  puts "[e] - Exponent"
  puts "[mg] - Monthly Mortgage"
  puts "[sq] - Square root"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu

user_selection = gets.chomp.downcase

until user_selection == "q"

  #Process the user_selection
  case user_selection
  when 'a'
    add
  when "s"
    subtract
  when "m"
    multiply
  when "d"
    division
  when "b"
    bmi
  when "e"
    exponent
  when "mg"
    monthly_mortgage
  when "sq"
    sqrt
  else
    puts "Invalid selection!"
  end

  #Show the menu again
  show_menu

  #Read the next user selection
  user_selection = gets.chomp.downcase
end

puts "Thank you for using this Calculator."
