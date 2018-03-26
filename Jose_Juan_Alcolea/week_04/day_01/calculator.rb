
def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Sustraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[^] - Exponent"
  puts "[r] - Square roots"
  puts "[mc] - Mortage calculator"
  puts "[bm] - Body mass"
  puts "[tc] - Trip Calculator"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end


show_menu
user_selection = gets.chomp.downcase


until user_selection == "q" do
  case user_selection

  when 'a'

    print "Enter first number do you want to add: "
    num1 = gets.to_i
    print "Enter second number do you want to add: "
    num2 = gets.to_i
    print num1 + num2
    show_menu
  when 's'

    print "Enter first number do you want to sustract: "
    num1 = gets.to_i
    print "Enter second number do you want to sustract: "
    num2 = gets.to_i
    print num1 - num2
    show_menu

  when 'm'

    print "Enter first number do you want to multiply: "
    num1 = gets.to_i
    print "Enter second number do you want to multiply: "
    num2 = gets.to_i
    print num1 * num2
    show_menu

  when 'd'

    print "Enter first number do you want to divide: "
    num1 = gets.to_i
    print "Enter second number do you want to divide: "
    num2 = gets.to_i
    print num1 / num2
    show_menu

  when '^'

    print "Enter number do you want to calculate: "
    num1 = gets.to_i
    print "What number do you want to be power of?: "
    num2 = gets.to_i
    print num1 ** num2
    show_menu

  when 'r'

    print "What number do you want to calculate the square root?: "
    num1 = gets.to_i
    print Math.sqrt(num1)
    show_menu

  when 'mc'

    print "How much money do you want?: "
    load = gets.to_i
    print "How many years do you want to pay it?: "
    years = gets.to_i
    months = years / 12
    print load / months
    show_menu

when 'bm'

  print "What is your weigth (kg)?"
  weigth = gets.to_i
  print "How tall are you (cm)?"
  heigth = gets.to_i
  bodyMass = weigth / heigth
  print bodyMass / heigth
  show_menu

when 'tc'

  print "How many miles?: "
  distance = gets.to_i

  print "How many miles per galon?: "
  milesGalon = gets.to_i

  print "How much per galon?: "
  priceGalon = gets.to_i

  print "How many miles per hour?: "
  speed = gets.to_i

  puts distance / speed
  puts (distance /milesGalon) *  priceGalon
  show_menu

  else
    puts "Invalid selection"
  end


  #show menu
  user_selection = gets.chomp.downcase
end

puts "thanks you for using crappy calculator."
