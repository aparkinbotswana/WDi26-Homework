# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)


print "enter loan amount: "
loan_amount = gets.chomp.to_i
print "Enter length of time in months: "
loan_period_months = gets.chomp.to_i
print "Enter interest rate: "
annual_interest_rate = gets.chomp.to_f/100

monthly_interest_rate = (1+annual_interest_rate/12)**(12/12)-1

annuity = (1-(1/(1+monthly_interest_rate))**loan_period_months)/monthly_interest_rate

payment = loan_amount/annuity

puts "\n$%.2f per month" % [payment]
