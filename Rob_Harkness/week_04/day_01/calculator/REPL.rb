require 'pry'
input = ''
until input == 'exit' || input == 'quit'

  puts eval(input)
  print '>'
  input = gets.chomp

end