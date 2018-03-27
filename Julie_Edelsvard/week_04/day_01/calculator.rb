def show_menu
   puts "[a] - Add"
   puts "[s] - Subtract"
   puts "[m] - Multiply"
   puts "[d] - Divide"
   puts "[sq] - Square"
   puts "[q] - Quit"
   print "Enter your selection: "
 end

 show_menu
 user_selection = gets.chomp.downcase

until user_selection == "q"

  case user_selection

    when 'a'
      print "What is the first number"
      first = gets.to_f
      print "What is the second number"
      second = gets.to_f
      puts "#{first} + #{second} = #{first + second}: "

    when 's'
      print "What is the first number"
      first = gets.to_f
      print "What is the second number"
      second = gets.to_f
      puts "#{first} - #{second} = #{first - second}: "

    when 'm'
      print "What is the first number"
      first = gets.to_f
      print "What is the second number"
      second = gets.to_f
      puts "#{first} * #{second} = #{first * second}: "

    when 'd'
      print "What is the first number"
      first = gets.to_f
      print "What is the second number"
      second = gets.to_f
      puts "#{first} / #{second} = #{first / second}: "

    when 'sq'
      print "What is the number: "
      number = gets.to_f
      puts number ** 2
      puts number ** 0.5


    else
      print "Invalid selection"

  end


  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using this crappy calculator."
