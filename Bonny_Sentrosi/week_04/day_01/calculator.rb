require "rainbow"

def show_top_menu
  puts "Wunderbar 9000 All-Life Calculator"
  puts "-=" * 40
  puts "[c] - Basic Calculator"
  puts "[s] - Advanced Arith Calc"
  puts "[d] - Depressing Mortgage Caculator"
  puts "[b] - The 'How fat am I?'' BMI index Calc"
  puts "[t] - The 'How expensive is this drive?'' Trip Calculator"
  puts "[q] - Quit"
  print "Enter your menu selection : "
end

show_top_menu
user_top_selection = gets.chomp.downcase

until user_top_selection == "q"

  case user_top_selection
  when 'c'
  show_basic_calc_menu
  # when 's'
  #   sub
  # when 'd'
  #   div
  # when 'm'
  #   mul
  else puts "invalid Selection"
  end
end
