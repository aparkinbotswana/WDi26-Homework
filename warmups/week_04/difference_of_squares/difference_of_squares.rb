class Squares

  def initialize num
    @num = num
    @arr = (1..@num).to_a
  end

  def square_of_sum

    #####################################
    # This is the long loopy way.
    # i = @num
    # sum = 0
    # while i > 0
    #   sum = sum + i
    #   i = i -1
    # end
    #
    # return sum  ** 2
    #####################################

    @arr.sum ** 2   ## This is the quicker ruby way
  end


  def sum_of_squares

    @arr.map { |number| number ** 2 }.reduce(:+)
    # arr.map { |number| number ** 2 }.sum   ## alternative method
  end


  def difference
    square_of_sum - sum_of_squares
  end


end


puts "This makes a new instance of the class 'Squares' named 'a'"
a = Squares.new(5)


puts "This is the variable 'a', an instance of class Squares: " + a.to_s

puts "within the class there are some methods"
puts "This is the result of the method 'sum_of_squares': " + a.sum_of_squares.to_s
puts "This is the result of the method 'square_of_sum': " + a.square_of_sum.to_s
puts "This is the result of the method 'difference': " + a.difference.to_s
