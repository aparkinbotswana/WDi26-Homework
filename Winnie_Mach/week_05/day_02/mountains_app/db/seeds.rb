# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all

Mountain.create :name => 'Mount Everest', :height => 8848, :country => 'Nepal'
Mountain.create :name => 'Mount Fuji', :height => 3776, :country => 'Japan'
Mountain.create :name => 'Matterhorn', :height => 4478, :country => 'Italy'
Mountain.create :name => 'Table Mountain', :height => 1084, :country => 'South Africa'
