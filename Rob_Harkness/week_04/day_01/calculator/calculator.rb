def menu
  puts
  puts '......Calculatorb'
  puts
  puts '-' * 40
  puts
  puts '.........plus: [ + ]'
  puts '.........minus: [ - ]'
  puts '.........divide: [ / ]'
  puts '.........multiply: [ * ]'
  puts '.........exponent: [ ** ]'
  puts '.........square root: [ // ]'
  puts '.........quit: [ q ]'

  selection = gets.chomp.downcase

  return 'add'.to_sym if selection == '+'
  return 'subtract'.to_sym if selection == '-'
  return 'div'.to_sym if selection == '/'
  return 'mult'.to_sym if selection == '*'
  return 'exp'.to_sym if selection == '**'
  return 'sqr'.to_sym if selection == '//'
  selection
end

# calculator class
class CALC
  def a_b
    puts 'first number?'
    a = gets.to_i
    puts
    puts 'second number?'
    b = gets.to_i
    puts
    [a, b]
  end

  def add
    ab = a_b
    ab[0] + ab[1]
  end

  def subtract
    ab = a_b
    ab[0] - ab[1]
  end

  def div
    ab = a_b
    ab[0] / ab[1]
  end

  def mult
    ab = a_b
    ab[0] * ab[1]
  end

  def exp
    ab = a_b
    ab[0] ** ab[1]
  end

  def sqr
    puts 'number to find square root of:'
    Math.sqrt(gets.to_i)
  end
end

calculator = CALC.new
operation = nil
until operation == 'q'
  operation = menu
  puts
  puts calculator.send(operation) unless operation == 'q'
  puts
end

