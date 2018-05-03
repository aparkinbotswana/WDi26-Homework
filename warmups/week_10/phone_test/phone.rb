class Phone

  def initialize phone_number
    # p `phone number is  #{phone_number}`
    # gsub uses regex to find any non word character  and replace it with empty string. Effectively, we are substituting + signs for nothing, as phone numbers can be input with a + as the first character.
    @num = phone_number.gsub( /\W+/, "" )
    
    # p @num
    split_num
  end

  def validate

    # If the phone number is less than 10 digits assume that it is bad number
    # If the phone number is 10 digits assume that it is good
    # If the phone number is 11 digits and the first number is 1, trim the 1 and use the first 10 digits
    # If the phone number is 11 digits and the first number is not 1, then it is a bad number
    # If the phone number is more than 11 digits assume that it is a bad number

    if @num.length == 11 && @num[0] == "1" #@num.start_with?("1") is an alternative, but I prefer the array method.
      @num = @num[1..10]

    # Class suggestion:
    # elsif @num.length == 11 || @num.length == 9
    
    # Need to validate anything < 10 chars and over 10, ideally avoid cases checking for individual numbers (beyond or below 10)

    elsif @num.length != 10
      @num = "0000000000" # Or "0" * 10
    end

    @num

  end

  def split_num
    @matches = @num.match( /(\d{3})(\d{3})(\d{4})/ )
  end

  def to_s

    # One approach - not suggested, but might clarify what the captures are doing:
    # @matches = [[0..2], [3..5], [6..9]]

    # @matches = @num.match( /(\d{3})(\d{3})(\d{4})/ )

    # The format numbers need to return:
    # "(123) 456-7890"

    "(#{ @matches[1] }) #{ @matches[2] }-#{ @matches[3] }"
  end

  def area_code
    @matches[1]
  end
end