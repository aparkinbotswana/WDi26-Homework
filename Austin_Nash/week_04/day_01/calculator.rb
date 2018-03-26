def show_menu
  puts "$" * 50
  puts "Calculator - week 4 day 1"
  puts "^" * 50
  puts "[q] - Quit"
  puts "[a] - add"
  puts "[s] - subtract"
  puts "[m] - multiply"
  puts "[d] - divide"
  puts "[e] - exponets"
  puts "[sr] - square roots"
  puts "[trip] - calculate your time info"
  puts "[bmi] - Body Mass Index"
  puts "[mc] - Mortage Calculator"
  print "enter your menu selection : "

end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

  case user_selection
  when "a"
    print "number 1 : "
    num1 = gets.to_i
    print "number 2 : "
    num2 = gets.to_i
    total = num1 + num2
    puts "#{num1} + #{num2} = #{total}"
  when "s"
    print "number 1 : "
    num1 = gets.to_i
    print "number 2 : "
    num2 = gets.to_i
    total = num1 - num2
    puts "#{num1} - #{num2} = #{total}"
  when "m"
    print "number 1 : "
    num1 = gets.to_i
    print "number 2 : "
    num2 = gets.to_i
    total = num1 * num2
    puts "#{num1} * #{num2} = #{total}"
  when "d"
    print "number 1 : "
    num1 = gets.to_i
    print "number 2 : "
    num2 = gets.to_i
    total = num1 / num2
    puts "#{num1} / #{num2} = #{total}"
  when "e"
    print "number : "
    num1 = gets.to_i
    print "to the power of : "
    num2 = gets.to_i
    total = num1 ** num2
    puts "#{num1} ^ #{num2} = #{total}"
  when "sr"
    print "number : "
    num1 = gets.to_i
    total = Math.sqrt(num1).to_i
    puts "the square root of #{num1} = #{total}"
  when "trip"
    print "distance in miles : "
    distance = gets.to_i
    print "miles per gallon : "
    mpg = gets.to_i
    print "price per gallon : "
    ppg = gets.to_f
    print "miles per hour : "
    mph = gets.to_i
    time = (distance / mph).to_f
    cost = ((distance / mpg) * ppg).to_f
    puts "distance = #{distance}, mpg = #{mpg}, ppg = #{ppg}, mph = #{mph}"
    puts "The cost of your trip will be $#{cost} and it will take #{time} hours"
  when "bmi"
    print "enter your height in m. : "
    height = gets.to_i
    print "enter your weight in kg. : "
    weight = gets.to_i
    total = (weight/height)/height
    puts "with a height of #{height} m. and a weigh of #{weight} kg. your BMI is #{total}"
  when "mc"
    print "enter the amount borrowed : "
    principle = gets.to_i
    print "interest rate : "
    interest = gets.to_f
    print "length of loan term in years : "
    term = gets.to_i
    print "payments per year : "
    payments = gets.to_i
    rate = interest / payments
    top_equation = rate * ((1 + rate) ** (payments * term))
    bottom_equation = ((1 + rate) ** (payments * term) ) - 1
    final = principle * (top_equation/bottom_equation)
    puts "final = #{final}, principle = #{principle}, interest = #{interest}, term length = #{term}, paymnets = #{payments}"
    puts "your monthly Mortage payment will be #{final}"
  else

    puts "invalid selection"
  end
  # process the selection
  # show show_menu
  # read the next user selection

  show_menu
  user_selection = gets.chomp.downcase

end

puts "you are done, thanks for using"
