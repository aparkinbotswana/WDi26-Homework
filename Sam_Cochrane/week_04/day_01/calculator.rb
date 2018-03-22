def show_menu
 puts"Calculator"
 puts"-=" *40
 puts"[p] -Quit"
 puts"[a] -addition"
 puts"[s] -subtraction"
 puts"[m] -multiply"
 puts"[d] -divider"
 print "Enter your menu selection:"
end

show_menu
user_selection =gets.chomp.downcase


puts user_selection

until user_selection == "q"

  case user_selection
    when "a"
      print "Addition, What is the first number?"
           first = gets.to_i
           print "What is the second number?"
           second = gets.to_i
           puts "#{ first } + #{ second } = #{ first + second }"
    when "s"
      print "Subtraction, What is the first number?"
          first = gets.to_i
          print "What is the second number?"
          second = gets.to_i
          puts "#{ first } - #{ second } = #{ first - second }"
    when "m"
      print "Mulitply, What is the first number?"
      first = gets.to_i
      print "What is the second number?"
      second = gets.to_i
      puts "#{ first } * #{ second } = #{ first * second }"
    when "d"
      print "What is the first number?"
      first = gets.to_i
      print "What is the second number?"
      second = gets.to_i
      puts "#{ first } / #{ second } = #{ first / second }"
    else
      puts"Invaild selection"

  end


  show_menu
  user_selection =gets.chomp.downcase

end








# when "a"
#   puts "What would you like to add?"
# # def add
# #
# # end
# # add
# #called funtion it worked till here
# # its not contining on whats happening?
# # must be here im missing somehting...
# # do i use a loop?
#
# show_menu
# user_selection =gets.chomp.downcase
#
# case user_selection
# when "s"
#   puts "What would you like to subtract?"
# def sub

# # end
# # sub
#
# # same deal here
#
# show_menu
# user_selection =gets.chomp.downcase
#
# until user_selection == "q"
#
# case user_selection
# when "m"
#   puts "What would you like to multiply?"
# # def multiply

# # end
# # multiply
#
#
# # as above
#
#
# show_menu
# user_selection =gets.chomp.downcase
#
# until user_selection == "q"
#
# case user_selection
# when "d"
#   puts "What would you like to divide?"
# # def divider
# # end
# # divider
#
#
# else
#   puts"Invaild selection"
# end
#
# show_menu
# user_selection =gets.chomp.downcase
# end
#
# puts "Thanks for using crappy calculator"
