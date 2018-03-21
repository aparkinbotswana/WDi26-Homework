
def mortgage
  puts "How much do you owe the bank?"
  owing = gets.to_f
  puts "What is the interest rate (%)?"
  rate = gets.to_f./100
  puts "What is your monthly repayment?"
  repayment = gets.to_f
  month = 0

   while owing > 0 do
    puts "At month #{month} you owe the bank #{owing}"
    month += 1
    owing = (owing + (owing * rate)) - repayment
   end
end

def bmi
  puts "What is your weight (kg)? "
  weight = gets.to_f
  puts "What is your height (m)? "
  height = gets.to_f

  bmi = (weight/(height*height))
  puts "bmi: #{bmi}"

  if bmi < 18.5  # underweight
    puts "You're underweight"

  elsif bmi > 18.5 and bmi < 25  # normal
    puts "You're normal"

  elsif bmi > 25 and bmi < 30  # overweight
    puts "You're overweight"

  elsif bmi > 30  # obese
    puts "You're obese"
  end
end

def tripcalc
  puts "Distance: "
  dist = gets.to_f
  puts "Miles Per Gallon: "
  mpg = gets.to_f
  puts "Price per gallon: "
  ppg = gets.to_f
  puts "Speed (mph): "
  speed = gets.to_f

  # TripTime = (distance / speed)
  # cost = ppg / mpg

  puts "Trip time is #{dist/speed}"

  gallons = dist * 1
  puts "cost is #{(ppg/mpg)*dist}"

end

def show_menu
  puts ""
  puts "Calculator"
  puts "-=" * 40
  puts "[a] - Mortgage"
  puts "[b] - BMI"
  puts "[c] - Trip Calculator"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"
  case user_selection
  when 'a'
    mortgage

  when 'b'
    bmi

  when 'c'
    tripcalc

  else
    puts "invalid selection"
  end
  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using calculator"
