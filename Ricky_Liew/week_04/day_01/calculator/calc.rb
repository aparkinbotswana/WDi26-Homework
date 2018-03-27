require 'pry'

def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - addition"
  puts "[b] - subtraction"
  puts "[c] - multiplication"
  puts "[d] - division"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"
  # process the user_selection
  case user_selection
  when 'a'
    puts "Addition"
    print "What is the first number? "
    first = gets.to_f
    print "What is the second number? "
    second = gets.to_f

    puts "#{first} + #{second} = #{first + second}"
    #user_selection = "b"
    #show_menu
    # binding.pry

  when 'b'
    puts "Subtraction"
    print "What is the first number? "
    first = gets.to_f
    print "What is the second number? "
    second = gets.to_f

    puts "#{first} - #{second} = #{first - second}"
    #show_menu

  when 'c'
    puts "Multiplication"
    print "What is the first number? "
    first = gets.to_f
    print "What is the second number? "
    second = gets.to_f

    puts "#{first} x #{second} = #{first * second}"
    #show_menu

  when 'd'
    puts "Division"
    print "What is the first number? "
    first = gets.to_f
    print "What is the second number? "
    second = gets.to_f

    puts "#{first} / #{second} = #{first / second}"
    #show_menu

  else
    puts "invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase

end

puts "Thank you for using calculator"
