require 'pry'

def chess_board #Setting up our chess board hash to be passed around through our functions. This helps to get around scope. SCREW YOU SCOPE!
  {
  1 => ['_', '_', '_', 'B', '_', '_', '_', '_'],
  2 => ['_', '_', '_', '_', '_', '_', '_', '_'],
  3 => ['_', '_', '_', '_', '_', '_', '_', '_'],
  4 => ['_', '_', '_', '_', '_', '_', '_', '_'],
  5 => ['_', '_', '_', '_', '_', '_', '_', '_'],
  6 => ['_', '_', '_', '_', '_', '_', '_', '_'],
  7 => ['_', '_', '_', '_', '_', '_', '_', '_'],
  8 => ['_', '_', '_', 'W', '_', '_', '_', '_']
  }
end


def find_index letter #this function returns the key and position in our array which our letter is in.
  index = {}
  chess_board.each do | key, value |
    value.each do | value |
      if value == letter # Searches for respective chess piece on our board.
        index = {key => chess_board[key].index(value)} # Converts White/Black Queen position into a hash. Key being column number and value being row number
      end
    end
  end
  puts index
  index
end


white_index = find_index 'W' #Respective chess piece positioning on the board.
black_index = find_index 'B' #Respective chess piece positioning on the board.


def check_diagonal white_index, black_index
  attack = false
  key = white_index.keys.first
  value = white_index.values.first
  index = 0
  if attack == false
    while key <  chess_board.count + 1 # loops from row of white piece to the bottom of the board
      if chess_board[key][value + index] == 'B'
        p chess_board[key]
        attack = true
      elsif chess_board[key][value - index] == 'B'
        p chess_board[key]
        attack = true
      end
      index += 1
      key += 1 # This increment is used for our While loop, and also to traverse through our correct key during every loop.
    end
  end
  if attack == false # forgoing redundant loop if we find an attack path in previous IF statement.
    key = white_index.keys.first
    index = 0
    while key > 0 #loops from the row the White Queen occupies to the beginning of board to white piece column
      if chess_board[key][value + index] == 'B'
        p chess_board[key]
        attack = true
      elsif chess_board[key][value - index] == 'B'
        p chess_board[key]
        attack = true
      end
      key -= 1
      index += 1
    end
  end
  attack
end


def attack_check white_index, black_index
  if white_index.keys.first == black_index.keys.first # checks to see if there is an attack in the same row by checking if both keys are identical
    puts 'ITS A TRAP! You can attack in the same row.'
    puts "White Queen #{white_index} can attack Black Queen #{black_index}."
  elsif white_index.values.first == black_index.values.first # checks to see if there is an attack in the same column buy comparing if values in each hash are identical
    puts 'ITS A TRAP! You can attack in the same column.'
    puts "White Queen #{white_index} can attack Black Queen #{black_index}."
  elsif check_diagonal white_index, black_index # call function to check mulitple diagonal vectors. Returns true or false.
    puts 'ITS A TRAP! You can attack diagonally.'
    puts "White Queen #{white_index} can attack Black Queen #{black_index}."
  else
    puts 'These are not the droids you are looking for.'
  end
end


attack_check white_index, black_index
