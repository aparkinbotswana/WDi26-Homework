def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[m] - Multiply"
  puts "[d] - Divide"
  puts "[e] - Exponents"
  puts "[s] - Square Root"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

  case user_selection
  when 'a'
    print "enter value 1: "
    valueOne = gets.to_f
    print "enter value 2: "
    valueTwo = gets.to_f
    puts "#{valueOne} plus #{valueTwo} = #{valueOne + valueTwo}"

  when 'm'
    print "enter value 1: "
    valueOne = gets.to_f
    print "enter value 2: "
    valueTwo = gets.to_f
      puts "#{valueOne} times #{valueTwo} = #{valueOne * valueTwo}"

  when 'd'
    print "enter value 1: "
    valueOne = gets.to_f
    print "enter value 2: "
    valueTwo = gets.to_f
      puts "#{valueOne} divided by #{valueTwo} = #{valueOne / valueTwo}"

  when 'e'
    print "enter value 1: "
    valueOne = gets.to_f
    print "enter value 2: "
    valueTwo = gets.to_f
      puts "#{valueOne} to the power of #{valueTwo} = #{valueOne ** valueTwo}"

  when 's'
    print "enter value : "
    valueOne = gets.to_f
      puts "The square root of #{valueOne}  = #{Math.sqrt(valueOne)}"


  else
    puts "Invalid selection"
  end

  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using crappy calculator."
