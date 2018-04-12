evens = nums.select do |n|
    n % 2 == 0
end

# BETTER METHOD
evens = nums.select { |n| n.even? }

nums.select { |n| false }