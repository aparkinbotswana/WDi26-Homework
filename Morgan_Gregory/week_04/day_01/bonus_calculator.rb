require "rainbow"
def show_menu
  puts "Bonus calculator"
  puts "-=" * 40
  puts "[bmi] - BMI"
  puts "[m] - mortgage"
  puts "[t] - trip"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

# loop until user hits 'q'
until user_selection == 'q'
  # process the user_selection
  case user_selection # addition
  when 'bmi'
    print "Your weight in kg?: "
    weight = gets.to_f

    print "Your height in meters?: "
    height = gets.to_f

    x = weight / height

    result = x  / height
    puts "Result - your BMI is: #{ result }"

  when 'm'
    print "what percent is your interest rate is : "
    int = gets.to_f

    interest = (int / 100) / 12

    print "how many years to pay off your mortgage : "
    years = gets.to_i

    num_payments = years * 12

    print "how much do you want to borrow : "
    borrow = gets.to_i

    mortgage = borrow * ((interest * ((1 + interest) ** num_payments)) / (((1 + interest) ** num_payments) -1))

    result = mortgage.round(2).to_f
    puts "Your monthly repayments will be : $#{ result }"

  when 't'
    print "distance in km: "
    distance = gets.to_f

    print "km per litre of petrol: "
    km_per_litre = gets.to_f

    print "dollars per litre: "
    dollars_per_litre = gets.to_f

    print "speed in km per hour: "
    speed = gets.to_i

    trip_time = distance / speed

    trip_cost = distance * km_per_litre / dollars_per_litre

    result1 = trip_time.to_f

    result2 = trip_cost.round(2).to_f

    puts "Your trip will take #{ result1 } hrs and will cost you $#{ result2 }"

  else
    puts "Invalid selection"
  end # END division

  # show the show_menu
  # Read the next user selection
  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thankyou for using this INCREDIBLE calculator."
