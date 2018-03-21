# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight

#BMI is calculated by dividing your weight in kilograms by your height in metres squared.

print "enter your weight in kilograms :"
weight = gets.to_f
print "enter your height in centimetres :"
height = gets.to_f
height_in_metres = height/100
bmi = (weight / (height_in_metres**2)).round(1)
puts "Your BMI is #{bmi}"
