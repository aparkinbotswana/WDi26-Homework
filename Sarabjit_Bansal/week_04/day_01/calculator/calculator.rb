def add()
  print "Enter first number:"
  no1 = gets.to_f
  print "Enter second number:"
  no2 = gets.to_f
  disp = "Addition of #{no1} & #{no2} :#{no1+no2} "
end
def subr()
  print "Enter first number:"
  no1 = gets.to_f
  print "Enter second number:"
  no2 = gets.to_f
  disp = "Substraction of #{no1} & #{no2} :#{no1-no2} "
end
def mul()
  print "Enter first number:"
  no1 = gets.to_f
  print "Enter second number:"
  no2 = gets.to_f
  disp = "Product of #{no1} & #{no2} :#{no1*no2} "
end
def div()
  print "Enter first number:"
  no1 = gets.to_f
  print "Enter second number:"
  no2 = gets.to_f
  disp = "Divison of #{no1} & #{no2} :#{no1/no2} "
end
def morg()
  print "Enter Loan Amount:"
  loanamt = gets.to_f
  print "Enter period of time:"
  mperiod = gets.to_f * 12
  print "Enter rate:"
  mrate = (gets.to_f/1200)
  no1 = (1+mrate) ** mperiod
  no2 = ((1+mrate) ** mperiod)-1
  morrate = (loanamt * (mrate*no1)/no2)
  disp = "Monthy Installmet is #{morrate} "
end
def exp()
  print "Enter first number:"
  no1 = gets.to_f
  print "Enter second number:"
  no2 = gets.to_f
  expo = no1**no2
  disp = "Exponent of #{no1} & #{no2} :#{expo} "
end

def sqrt()
  print "Enter number:"
  no1 = gets.to_f
  disp = "Square root of #{no1} :#{Math.sqrt(no1)} "
end



def show_menu
  puts "Calculator"
  puts"-=" * 40
  puts"[a] - Addition"
  puts"[s] - Substraction"
  puts"[d] - Divison"
  puts"[m] - Multipication"
  puts"[e] - Exponents"
  puts"[r] - Square roots"
  puts"[c] - Mortage Calculator"
  puts"[q]-Quit"
  print "Enter your menu selection:"
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == 'q'
case user_selection
when 'a'
  puts add()
when 's'
  puts subr()
when 'm'
  puts mul()
when 'd'
  puts div()
when 'r'
  puts sqrt()
when 'e'
  puts exp()
when 'c'
  puts morg()
else
  puts "Invalid Selection"
end
#proess the user_selection
#show the menu again
#Read the next user selection
show_menu
user_selection = gets.chomp.downcase
end

puts "Thanks for using calculator."
