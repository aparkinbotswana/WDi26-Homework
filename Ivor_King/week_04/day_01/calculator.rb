require 'pry'
require 'rainbow'

def show_menu
    puts "\r\n"
    puts "-=" * 40
    puts Rainbow("** Dream Calculator **").inverse.blink.bg(:red)
    puts "-=" * 40
    puts "[a] - Addition"
    puts "[s] - Subtraction"
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[e] - Exponential"
    puts "[r] - Square root"
    puts Rainbow("[q] - Quit").yellow
    print "Enter your menu selection: "
end

def get_numbers
    puts "Enter the first number: "
    anum = gets.to_i
    puts "Enter the second number: "
    bnum = gets.to_i
    return [anum, bnum]
end

system "clear"
show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

    case user_selection
    when 'a'
        values = get_numbers
        puts Rainbow("Sum of the numbers is: #{values.inject(0, :+)}").cyan
    when 's'
        values = get_numbers
        puts Rainbow("First number minus the second number is: #{values[0] - values[1]}").cyan
    when 'm'
        values = get_numbers
        puts Rainbow("First number multiplied by the second number is: #{values.inject(:*)}").cyan
    when 'd'
        values = get_numbers
        puts Rainbow("First number divided by the second number is: #{values[0] / values[1]}").cyan
    when 'e'
        values = get_numbers
        puts Rainbow("First number to the power of the second number is: #{values[0] ** values[1]}").cyan
    when 'r'
        puts "Enter a number: "
        anum = gets.to_i
        puts Rainbow("Square root of the number is: #{Math.sqrt(anum)}").cyan
    else
        puts "Invalid selection. Try again."
    end

    show_menu
    user_selection = gets.chomp.downcase

end

puts "Thanks for visiting. We've had fun calculating for you. Ciao!"