# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Character.destroy_all
Character.create :name => 'Elsa', :age => 23, :description => 'Elsa is a blah blah blah blah'







Movie.destroy_all
Movie.create :name => 'Frozen', :year => 2013, :director => 'Some dude', :rating => '5 stars'
