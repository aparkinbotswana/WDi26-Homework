# Trip Calculator
# Calculate a trip time and cost given inputs for
# distance
# miles per gallon
# price per gallon
# speed in miles per hour

print "enter the distance for the trip in miles :"
distance = gets.to_f
print "enter the miles per gallon :"
miles_per_gallon = gets.to_f
print "enter the price per gallon in dollars :"
price_per_gallon = gets.to_f
print "enter the speed in miles per hour :"
speed = gets.to_f

trip_time = distance / speed
trip_cost = distance / miles_per_gallon * price_per_gallon

puts "the trip time is #{trip_time} hours and the cost is #{trip_cost} dollars."
