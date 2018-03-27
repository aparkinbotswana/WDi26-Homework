def show_menu
  puts "Calculator"
  puts "*" * 20
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponential"
  puts "[sq] - Square root"
  puts '[bmi] - Body Mass Index'
  puts '[tc] - Trip Calculator'
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

  #Process the selection
  case user_selection
  when 'a'
    print "What's the first number?: "
    a = gets.to_i
    print "What's the second number?: "
    b = gets.to_i
    puts a + b

  when 's'
    print "What's the first number?: "
    a = gets.to_i
    print "What's the second number?: "
    b = gets.to_i
    puts a - b

  when 'm'
    print "What's the first number?: "
    a = gets.to_i
    print "What's the second number?: "
    b = gets.to_i
    puts a * b

  when 'd'
    print "What's the first number?: "
    a = gets.to_i
    print "What's the second number?: "
    b = gets.to_i
    puts a / b

  when 'sq'
    print "What's your numnber?: "
    a = gets.to_f
    puts Math.sqrt(a)

  when 'e'
    print "What's your number?: "
    a = gets.to_f
    puts Math.exp(a)

  when 'bmi'
    print "What's your weight in kilogram?: "
    a = gets.to_f
    print "What's your height in metres?: "
    b = gets.to_f
    puts a / (b * b)

  when 'tc'
    print "What's the distance in Km?: "
    a = gets.to_f
    print "What's the fuel economy in KM/L?: "
    b = gets.to_f
    print "What's the price of fuel per litre?: "
    c = gets.to_f
    print "What's the speed in km/h?: "
    d = gets.to_f
    puts "*" * 20
    puts "The trip would take #{(a / d).to_s} hours "
    puts "The total amount of money for the trip is $ #{((a * c) / b).to_s}"
    puts "*" * 20
  else
    puts "Invalid selection"
  end



  #show show_menu
  show_menu
  #Read the next user selection
  user_selection = gets.chomp.downcase
end

puts "Thank you for using my crappy calculator."
