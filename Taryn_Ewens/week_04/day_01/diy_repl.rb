puts "Welcome to Taryn's Ruby REPL"
puts "At anytime press ctrl C to quit"
# until command == "q" do
loop do
  print "What command would you like to run: "
  command = gets.chomp
  puts eval(command)
end

# end
