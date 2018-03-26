#require pry

def show_menu
  puts "Calculator"
  puts "-" * 40
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[m] - Multiplication"
  puts "[d] - Division"
  puts "[e] - Exponential"
  puts "[r] - Square Root"
  puts "[bmi] - Body Mass Index"
  puts "[mor] - Mortagage Calculator"
  puts "[trip] - Trip Calulator"
  puts "[q] - Quit"
  print "Enter your menu selection: "
end

show_menu
user_selection = gets.chomp.downcase

until user_selection == "q"

  case user_selection
  when "a"

      print "what is the first number: "
      first = gets.to_i
      print "what is the second number: "
      second = gets.to_i
      puts "#{first} + #{second} = #{first + second}"
      def add(first, second)
        first + second
      end

    when "s"

        print "what is the first number: "
        first = gets.to_i
        print "what is the second number: "
        second = gets.to_i
        puts "#{first} - #{second} = #{first - second}"
        def subtract(first, second)
          first - second
        end
      when "m"

          print "what is the first number: "
          first = gets.to_i
          print "what is the second number: "
          second = gets.to_i
          puts "#{first} * #{second} = #{first * second}"
          def multiply(first, second)
            first * second
          end

        when "d"

            print "what is the first number: "
            first = gets.to_i
            print "what is the second number: "
            second = gets.to_i
            puts "#{first} / #{second} = #{first / second}"
            def divide(first, second)
              first / second
            end

          when "e"

              print "what is the first number: "
              first = gets.to_i
              print "what is the second number: "
              second = gets.to_i
              puts "#{first} ** #{second} = #{first ** second}"
              def exponent(first, second)
                first ** second
              end
            when "r"

                print "what is the number: "
                number = gets.to_i
                puts "square root of #{number} = #{Math.sqrt(number)}"
                def root(number)
                  Math.sqrt(number)
                end
              when "bmi"

                  print "what is the height in metres: "
                  height = gets.to_i.to_f
                  print "what is the weight in KG: "
                  weight = gets.to_i.to_f
                  puts "Your BMI is = #{weight / (height * height)}"
                  def bmi(height, weight)
                    weight / (height * height)
                end

              when "trip"

                  print "what is the distance(km): "
                  distance = gets.to_i.to_f
                  print "what is km/L: "
                  kml = gets.to_i
                  print "what is the price per L in $: "
                  price = gets.to_i.to_f
                  print "what is the speed (km/h): "
                  speed = gets.to_i.to_f
                  puts "trip time is = #{distance / speed} hours"
                  def distance(distance, kml, price, speed)
                    distance / speed
                  puts "trip cost = #{(distance / kml) * price}"
                  #def cost(distance, kml, price, speed)
                    #(distance / kml) * price
                  end

  else
    puts "Invalid selection"
  end


  show_menu
  user_selection = gets.chomp.downcase
end

puts "Thank you for using crappy calculator"
