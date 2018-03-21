# https://gist.github.com/Phoboes/5d9a80f35956064ef91af7bf49bc565a
#
# Scrabble Score
# Write a program that, given a word, computes the scrabble score for that word.
#
# scrabble("cabbage")
# # => 14
# Your program should be in a file named scrabble.rb. You should be able to compute the score for any word entered by the user.
#
# Letter Values
# Letter                           Value
# A, E, I, O, U, L, N, R, S, T       1
# D, G                               2
# B, C, M, P                         3
# F, H, V, W, Y                      4
# K                                  5
# J, X                               8
# Q, Z                               10
# Extensions
# You can play a :double or a :triple letter.
# You can play a :double or a :triple word.

require "pry"

## when inside a case statement. if else statements is standalone.



def score (word)

  points = 0

  p word_array = word.upcase.chars
  p first_array = "AEIOULNRST".chars
  p second_array = %w{D G}
  p third_array = "BCMP".chars
  p fourth_array = %w{F H V W Y}
  p fifth_array = ["K"]
  p sixth_array = %w{J X}
  p seventh_array = %w{Q Z}




  word_array.each do |letter|   ##loop through each character in word_array

    if first_array.include? letter
    points += 1

    elsif second_array.include? letter
    points += 2

    elsif third_array.include? letter
    points += 3

    elsif fourth_array.include? letter
    points += 4

    elsif fifth_array.include? letter
    points += 5

    elsif sixth_array.include? letter
    points += 8

    elsif seventh_array.include? letter
    points += 10
    end
    p points

  end
end
 score ("cabbage")
binding.pry
