# Take any positive integer n. If n is even, divide it by 2 to get n / 2.
# If n is odd, multiply it by 3 and add 1 to obtain 3n + 1.
# Repeat the process indefinitely.



require 'pry'


class Collatz

  def initialize num
    @collection = [ num ]
    generate_collection
  end

  def generate_collection
    while @collection.last != 1
      if @collection.last.even?
        next_num = @collection.last / 2
      else
        next_num = @collection.last * 3 + 1
      end
      @collection.push( next_num)
    end
  end

  def answer
    p "The first number was #{@collection.first}"
    p "The steps were #{@collection}"
    p "The number of steps was #{@collection.length}"
  end
end



Collatz.new(19).answer





























#
# class Collatz
#
#   def initialize num
#     @collection = [ num ]
#     generate_collection
#   end
#
#   def generate_collection
#
#     while @collection.last != 1
#       if @collection.last.even?
#         next_num = @collection.last / 2
#       else
#         next_num = @collection.last * 3 + 1
#       end
#       @collection.push next_num
#     end
#
#   end
#
#   def answer
#     p "the number you started with was: #{ @collection.first}"
#     p "the sequence of numbers to get to 1 was: #{ @collection}"
#     p "the number of steps to get there: #{ @collection.length}"
#
#
#   end
#
# end

# binding.pry
