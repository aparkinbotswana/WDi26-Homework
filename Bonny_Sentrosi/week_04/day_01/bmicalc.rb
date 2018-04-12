require 'rainbow'


def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[q] - Quit"
  print "Enter your menu selection : "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"


  def add
    print "What is the first number : "
    first = gets.to_f
    print "What is the second number : "
    second = gets.to_f
    puts "#{first } + #{second} = #{first + second}"
    # first + second # impicitly returned
  end

  def sub
    print "What is the first number : "
    first = gets.to_f
    print "What is the second number : "
    second = gets.to_f
    puts "#{first } - #{second} = #{first - second}"
    # first + second # impicitly returned
  end

  def div
    print "What is the first number : "
    first = gets.to_f
    print "What is the second number : "
    second = gets.to_f
    puts "#{first } / #{second} = #{first / second}"
    # first + second # impicitly returned
  end

  def bmi
    print "What is you weight in Kilo's? : "
    weight = gets.to_f
    print "What is your height in metres? : "
    height = gets.to_f
    puts "Your BMI is = #{(weight / height) / height}"
    # first + second # impicitly returned
  end
#process user_selection\
#show menu
# Read the next user selection
case user_selection
when 'a'
  add
when 's'
  sub
when 'd'
  div
when 'b'
  bmi
else puts "invalid Selection"
end

show_menu
user_selection = gets.chomp.downcase

end

puts "Thank you for using sucky sum machine."
