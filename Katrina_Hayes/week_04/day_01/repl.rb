puts "Welcome! This is a simple ruby repl"
puts "-" *15
input = ""
until input == "q" || input == "quit" || input == "exit" || input == "rm -rf /"
  puts eval(input)
  print ">> "
  input = gets.chomp
end


# Notes: Careful with eval - someone can write a command to wipe all your files

## could use loop do
