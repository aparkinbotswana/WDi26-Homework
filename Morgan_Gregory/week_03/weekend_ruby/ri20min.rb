#!/usr/bin/env ruby --- what does this mean???
# exercise from: https://www.ruby-lang.org/en/documentation/quickstart/3/
class MegaGreeter
  attr_accessor :name

  # create the object
  def initialize(names = "World")
    @names = names
  end

  # say hi to everbody
  def say_hi
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("each")
      # @names is a list of some kind, iterate! --- so a loop?
      @names.each do |name|
        puts "Hello #{name}!"
      end
    else
      puts "Hello #{@names}!"
    end

  # say bye to everybody
  def say_bye
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("join")
      # Join the list elements with commas
      puts "Goodbye #{@names.join(", ")}. Come back soon!"
    else
      puts "Goodbye #{@names}. Come back soon!"
    end
  end
end

if__FILE__ == $0
mg = MegaGreeter.new
mg.say_hi
mg.say_bye

# change name to be "Zeke"
mg.names = "Zeke"
mg.say_hi
mg.say_bye

# change the name to an array of names
mg.names = ["Albert", "Brenda", "Charles", "Dave", "Engelbert"]
mg.say_hi
mg.say_bye

# change to nil
mg.names = nil
mg.say_hi
mg.say_bye
end


# copied directly from the tutorial:
#!/usr/bin/env ruby

class MegaGreeter
  attr_accessor :names

  # Create the object
  def initialize(names = "World")
    @names = names
  end

  # Say hi to everybody
  def say_hi
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("each")
      # @names is a list of some kind, iterate!
      @names.each do |name|
        puts "Hello #{name}!"
      end
    else
      puts "Hello #{@names}!"
    end
  end

  # Say bye to everybody
  def say_bye
    if @names.nil?
      puts "..."
    elsif @names.respond_to?("join")
      # Join the list elements with commas
      puts "Goodbye #{@names.join(", ")}.  Come back soon!"
    else
      puts "Goodbye #{@names}.  Come back soon!"
    end
  end
end


if __FILE__ == $0
  mg = MegaGreeter.new
  mg.say_hi
  mg.say_bye

  # Change name to be "Zeke"
  mg.names = "Zeke"
  mg.say_hi
  mg.say_bye

  # Change the name to an array of names
  mg.names = ["Albert", "Brenda", "Charles",
              "Dave", "Engelbert"]
  mg.say_hi
  mg.say_bye

  # Change to nil
  mg.names = nil
  mg.say_hi
  mg.say_bye
end

# copied from tutorial: https://www.ruby-lang.org/en/documentation/quickstart/3/

#!/usr/bin/env ruby

# class MegaGreeter
#   attr_accessor :names
#
#   # Create the object
#   def initialize(names = "World")
#     @names = names
#   end
#
#   # Say hi to everybody
#   def say_hi
#     if @names.nil?
#       puts "..."
#     elsif @names.respond_to?("each")
#       # @names is a list of some kind, iterate!
#       @names.each do |name|
#         puts "Hello #{name}!"
#       end
#     else
#       puts "Hello #{@names}!"
#     end
#   end
#
#   # Say bye to everybody
#   def say_bye
#     if @names.nil?
#       puts "..."
#     elsif @names.respond_to?("join")
#       # Join the list elements with commas
#       puts "Goodbye #{@names.join(", ")}.  Come back soon!"
#     else
#       puts "Goodbye #{@names}.  Come back soon!"
#     end
#   end
# end
#
#
# if __FILE__ == $0
#   mg = MegaGreeter.new
#   mg.say_hi
#   mg.say_bye
#
#   # Change name to be "Zeke"
#   mg.names = "Zeke"
#   mg.say_hi
#   mg.say_bye
#
#   # Change the name to an array of names
#   mg.names = ["Albert", "Brenda", "Charles",
#               "Dave", "Engelbert"]
#   mg.say_hi
#   mg.say_bye
#
#   # Change to nil
#   mg.names = nil
#   mg.say_hi
#   mg.say_bye
# end
