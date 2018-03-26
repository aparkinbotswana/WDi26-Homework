require "rainbow"
def show_menu
  puts "calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[ex] - Exponent"
  puts "[sq] - Square root"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu # calling the method
user_selection = gets.chomp.downcase

# loop until user hits 'q'
until user_selection == 'q'
  # process the user_selection
  case user_selection
  when 'a' # Addition
    print "first number?: "
    first_num = gets.to_i

    print "second number?: "
    sec_num = gets.to_i

    result = first_num + sec_num

    puts "Result: #{ result }"

  when 's' # Subtraction
    print "first number?: "
    first_num = gets.to_i

    print "second number?: "
    sec_num = gets.to_i

    result = first_num - sec_num

    puts "Result: #{ result }"

  when 'm' # Multiplication
    print "first number?: "
    first_num = gets.to_i

    print "second number?: "
    sec_num = gets.to_i

    result = first_num * sec_num

    puts "Result: #{ result }"

  when 'd' # Division
    print "first number?: "
    first_num = gets.to_f

    print "second number?: "
    sec_num = gets.to_f

    result = first_num / sec_num

    puts "Result: #{ result }"

  when 'sq' # Square root
    print "what number do you wish to square?: "
    sq_num = gets.to_i

    result = sq_num * sq_num
    puts "Result: #{ result }"

  when 'ex' # Exponent
    print "what's the number?: "
    num = gets.to_i

    print "what's the exponent?: "
    ex_num = gets.to_i

    result = num ** ex_num # ** finds the exponent
    puts "Result: #{ result }"

  else
    puts "Invalid selection"
  end # END division

  # show the show_menu
  # Read the next user selection
  show_menu # calling the method
  user_selection = gets.chomp.downcase
end

puts "Thankyou for using this fantastic calculator."
