require 'pry'

def window_sill
  {
    1 => ['V', 'R', 'C', 'G', 'V', 'V', 'R', 'V', 'C', 'G', 'G', 'C', 'C', 'G', 'V', 'R', 'G', 'C', 'V', 'C', 'G', 'C', 'G', 'V'],
    2 => ['V', 'R', 'C', 'C', 'C', 'G', 'C', 'R', 'R', 'G', 'V', 'C', 'G', 'C', 'R', 'V', 'V', 'C', 'V', 'G', 'C', 'G', 'C', 'V']
  }
end


students = ['Joel', 'John', 'Julie', 'Monique', 'Ricky', 'Austin', 'Meena', 'Sam', 'Joseph', 'Abdul', 'Vu', 'Mandy']


alphabetised_students = students.sort # alphabetically sorting the array


def find_plants alphabetised_students, choosen_student # finds respective plants for given student and returns them in an array
  students_plants = []
  student_index = alphabetised_students.index(choosen_student)
  students_plants.push(window_sill[1][student_index * 2])   #There is a mathematical equation between each student and which position their plants are located in both arrays. Hence why we are doing student_index * 2 and (student_index * 2)+1
  students_plants.push(window_sill[1][(student_index * 2)+1])
  students_plants.push(window_sill[2][student_index * 2])
  students_plants.push(window_sill[2][(student_index * 2)+1])
  students_plants
end


choosen_student = 'Vu'
current_student_plants = find_plants alphabetised_students, choosen_student


def get_student_plants choosen_student, current_student_plants # turns our array of letters into the full words.
  plants = current_student_plants
  current_student_plants.each do |value|
    if value == 'C'
      plants[plants.index(value)] = 'Clover'
    elsif value == 'V'
      plants[plants.index(value)] = 'Violet'
    elsif value == 'R'
      plants[plants.index(value)] = 'Raddish'
    elsif value == 'G'
      plants[plants.index(value)] = 'Grass'
    end
  end
  puts "#{choosen_student}'s plants are the #{plants[0]} ,#{plants[1]} ,#{plants[2]} and #{plants[3]}"
end


get_student_plants choosen_student, current_student_plants
