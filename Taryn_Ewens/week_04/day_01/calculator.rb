def show_menu
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[*] - Multiplication"
  puts "[/] - Division"
  puts "[**] - Exponents"
  puts "[sr] - Square Root"
  puts "[m] - Mortgage Calculator"
  puts "[bmi] - BMI Calculator"
  puts "[trip] - Trip Calculator"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

  # Process the selection

  case user_selection
  when 'a'
    def add
      print "What is the first number: "
      first = gets.to_f
      print "What is the second number: "
      second = gets.to_f
      puts "#{ first } + #{ second } = #{ first + second }"
      first + second #Implicity returned
    end
    add

  when "s"
    def subtract
      print "What number are you subtracting from: "
      first = gets.to_f
      print "What number are you subtracting: "
      second = gets.to_f
      puts "#{ first } - #{ second } = #{ first - second }"
      first - second
    end
    subtract

  when "*"
    def multiply
      print "What is your first number: "
      first = gets.to_f
      print "What is your second number: "
      second = gets.to_f
      puts "#{ first } * #{ second } = #{ first * second }"
      first * second
    end
    multiply

  when "/"
    def divide
      print "What number would you like to divide: "
      first = gets.to_f
      print "What number would you like to divide by: "
      second = gets.to_f
      puts "#{ first } / #{ second } = #{ first / second }"
      first * second
    end
    divide

  when "**"
    def exponent
      print "What is your first number: "
      first = gets.to_f
      print "What is your second number: "
      second = gets.to_f
      puts "#{ first } ** #{ second } = #{ first ** second }"
      first * second
    end
    exponent

  when "sr"
    def square_root
      print "What number do you want to find the square root of: "
      first = gets.to_f

      puts "The square root of #{ first } = #{ Math.sqrt(first) }"
      Math.sqrt(first)
    end
    square_root

  when "m"
    def mortgage
      print "How much do you need to borrow? : "
      amount = gets.to_f
      print "How many years is the loan for? : "
      years = gets.to_f
      print "What is your interest rate including fees per annum? : "
      rate = gets.to_f
      rate = rate / 100
      puts "Your total loan repayments = #{ amount / (years / 12)}"
      puts "Your monthly repayment for a loan of #{ amount } over #{ years } years = #{ ((rate / 100 / 12) * amount) / (1 - ((1 + (rate / 100 / 12)) ** (-years * 12))) }"
      # I DON'T UNDERSTAND MORTGAGES AHHHH!
    end
    mortgage

  when "bmi"
    def bmi
      print "What is your weight in kg? : "
      weight = gets.to_f
      print "What is your height in metres? : "
      height = gets.to_f
      puts "Your BMI index of height of #{ height }m and weight of #{ weight }kg = #{ ((weight / height) / height) }"
      ((weight / height) / height)
    end
    bmi

  when "trip"
    def trip
      print "How far are you travelling in km? : "
      distance = gets.to_f
      print "How many km can you travel per litre? : "
      km_per_litre = gets.to_f
      print "What is your price of fuel per litre in dollars? : "
      price_per_litre = gets.to_f
      print "What is your speed in km per hour? : "
      speed = gets.to_f
      puts "The cost of your trip = $#{ ((distance / km_per_litre) * price_per_litre) } and it will take you #{ distance / speed } hours."
      ((distance / km_per_litre) * price_per_litre)
    end
    trip

  else
    puts "Invalid selection"
  end

  show_menu # Show menu
  user_selection = gets.chomp.downcase # Read the next selection

end

puts "Thank you for using crappy calculator."
