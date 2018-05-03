require ('pry')

class WordProblem

    def initialize question
      get_matches (question)
    end

    def get_matches string_to_match
      @matches = string_to_match.match( /(-?\d+) (plus|minus) (-?\d+)( (plus|minus) (-?\d+))?/ )

      @matches.nil? ? ( raise ArgumentError, "That's too complicated!" ) : @matches

    end

      def calculate num1, operator, num2
        if operator == "plus"
          return num1 + num2
        else
          return num1 - num2
        end
      end

    def answer
      sum = calculate( @matches[1].to_i, @matches[2], @matches[3].to_i )
      if @matches[4]
        sum = calculate( sum, @matches[5], @matches[6].to_i )
      end
      sum
    end

end

# binding.pry
