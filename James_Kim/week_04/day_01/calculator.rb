def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponents"
  puts "[r] - Square Roots"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

  case user_selection
  when "a"
    print "What is your first number: "
    first = gets.to_f
    print "What is your second number: "
    second = gets.to_f
    puts "#{first} + #{second} = #{first + second}"

  when "s"
    print "What is your first number: "
    first = gets.to_f
    print "What is your second number: "
    second = gets.to_f
    puts "#{first} - #{second} = #{first - second}"

  when "m"
    print "What is your first number: "
    first = gets.to_f
    print "What is your second number: "
    second = gets.to_f
    puts "#{first} * #{second} = #{first * second}"

  when "d"
    print "What is your first number: "
    first = gets.to_f
    print "What is your second number: "
    second = gets.to_f
    puts "#{first} / #{second} = #{first / second}"

  when "e"
    print "What is your first number: "
    first = gets.to_f
    print "What is your second number: "
    second = gets.to_f
    puts "#{first} ** #{second} = #{first ** second}"

  when "r"
    print "What is your first number: "
    first = gets.to_f
    print "What is your second number: "
    second = gets.to_f
    puts "#{first} ** (1.0/#{second}) = #{first ** (1.0/second)}"

else
  puts "Invalid Selection"
end

  # Process the selection
  # Show menu
  # Read the next user selection

  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using crap calculator."
