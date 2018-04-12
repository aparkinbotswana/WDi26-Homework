# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Movie.destroy_all
Movie.create(:title => 'Piano', :year => '1993', :image => 'https://upload.wikimedia.org/wikipedia/en/9/90/The-piano-poster.jpg')

Director.destroy_all
Director.create(:name => 'Jane Campion', :dob => '1954-04-30', :image => 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Jane_Campion_Cannes_2014_2.jpg/440px-Jane_Campion_Cannes_2014_2.jpg')
