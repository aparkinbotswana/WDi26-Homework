puts "Welcome to the Find Your Stripper Name REPL"
puts "Please hit 'ctrl + c' to exit when you get sick of this"

loop do

  def stripper_name colour_top, food

puts "Your stripper name is #{colour_top}#{food}."

  end

  print "Please enter the colour of the top you're wearing: "
  colour_top = gets.chomp.downcase.to_s

  print "Please enter the last food you ate: "
  food = gets.chomp.downcase.to_s

  stripper_name colour_top, food
end
