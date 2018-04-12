require 'pry'


class Roman

  def initialize num

    @num = num

  end

  def numbers
    {
      1000 => "M",
      900 => "CM",
      500 => "D",
      400 => "CD",
      100 => "C",
      90 => "XC",
      50 => "L",
      40 => "XL",
      10 => "X",
      9 => "IX",
      5 => "V",
      4 => "IV",
      1 => "I"
    }
  end

  def to_roman
    output = ""
    numbers.each do | key, value |
      while @num >= key

        output << value
        @num -= key

      end
    end
    output
  end


end

n1 = Roman.new(400)
n2 = Roman.new(300)
n3 = Roman.new(200)

p n1.to_roman
p n2.to_roman
p n3.to_roman
