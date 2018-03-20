require "rainbow"

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponential"
  puts "[sq] - Square Root"
  puts "[bmi] - BMI Calculator"
  puts "[mc] - Mortgage Calculator"
  puts "[trip] - Trip Calculator"
  puts "[q] - Quit"
  print "Enter your menu selection : "
 end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"
  # Process the selection (e.g. do addition or subtraction)

  case user_selection
    when "a"
      puts "What is the first number you would you like to add?"
      x = gets.chomp.to_f
      puts "What is the second number you would you like to add?"
      y = gets.chomp.to_f
      puts "#{x} + #{y} = #{x+y}"

    when "s"
      puts "What is the number you would you like to subtract from?"
      x = gets.chomp.to_f
      puts "What is the number you would like to subtract?"
      y = gets.chomp.to_f
      puts "#{x} - #{y} = #{x-y}"

    when "m"
      puts "What is the first number you would you like to multiply?"
      x = gets.chomp.to_f
      puts "What is the second number you would you like to multiply?"
      y = gets.chomp.to_f
      puts "#{x} * #{y} = #{x*y}"

    when "d"
      puts "What is the number you would you like to divide?"
      x = gets.chomp.to_f
      puts "What is the number you would you like to divide by?"
      y = gets.chomp.to_f
      puts "#{x} / #{y} = #{x/y}"

    when "e"
      puts "What is the base number that you would you like to find the power of?"
      x = gets.chomp.to_f
      puts "What is the power (exponent)?"
      y = gets.chomp.to_f
      puts "#{x} ** #{y} = #{x**y}"

    when "sq"
      puts "What is the number that you want to find the square root of?"
      x = gets.chomp.to_f
      def squareRoot (x)
          Math.sqrt(x)
      end
      puts "The square root of #{x} is #{squareRoot(x)}."

    when "bmi"
      puts "What is your height in metres?"
      m = gets.chomp.to_f
      puts "What is your weight in kg?"
      kg = gets.chomp.to_f
      def BMI (m,kg)
        kg/(m*m)
      end
      puts "Your BMI is #{BMI(m,kg)}."

    when "mc"
      puts "What is the size of your loan in dollars?"
      loan = gets.chomp.to_f
      puts "How many years do you have to pay it off?"
      years = gets.chomp.to_f
      puts "What is your annual interest rate as a number (without % sign)?"
      rate = gets.chomp.to_f

      def repayment (loan, years, rate)
          i = (rate.to_f/100)/12
          remaining_payments = years * 12
          loan * ( (i*((1+i)**remaining_payments))/(((1+i)**remaining_payments) - 1)) # This is a terrible formula - use an online calculator!
      end
      puts "Your monthly repayment is #{repayment(loan,years,rate)}."


  when "trip"
    puts "How far are you going in kilometres?"
    distance = gets.chomp.to_f
    puts "What is your fuel consumption in litres per 100km?"
    litres = gets.chomp.to_f
    puts "How much does a litre of petrol cost in dollars?"
    cost_per_litre = gets.chomp.to_f
    puts "What speed in kilometres per hour are you going?"
    speed = gets.chomp.to_f

    def trip_time (distance, speed)
      time = distance / speed
    end
    puts "Your trip time is #{trip_time(distance,speed)} hours."

    def trip_cost (distance, litres, cost_per_litre)
      (distance/100) * litres * cost_per_litre
    end
    puts "Your trip cost is $#{trip_cost(distance, litres, cost_per_litre)}."


  else
    puts "Invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase
# Show menu again and process the next user selection
end

puts "Thanks for using this calculator."
