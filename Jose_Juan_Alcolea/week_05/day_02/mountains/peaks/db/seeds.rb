# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all

Mountain.create :name => 'Everest', :height => 8.453, :country => 'Nepal'
Mountain.create :name => 'K2', :height => 8.455, :country => 'Pakistan'
Mountain.create :name => 'Anapurna', :height => 8.198, :country => 'Nepal'
Mountain.create :name => 'Fuji', :height => 3.780, :country => 'Japan'
Mountain.create :name => 'Mulacen', :height => 3.565, :country => 'Spain'
