# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Everest', :height => 29029, :rank => 1
Mountain.create :name => 'K2', :height => 28251, :rank => 2
Mountain.create :name => 'Kangchenjunga', :height=> 28169, :rank => 3
Mountain.create :name => 'Lhotse', :height=> 27940, :rank => 4
