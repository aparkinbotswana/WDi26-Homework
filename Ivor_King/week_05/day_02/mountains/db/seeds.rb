# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Mount Ridiculous', :height => 5.7, :country => 'Pakistan', :climbed => 10
Mountain.create :name => 'Mt Doom', :height => 6.4, :country => 'Azbinkistan', :climbed => 11
Mountain.create :name => 'Muggins Peak', :height => 1.02, :country => 'Kenturkey', :climbed => 23
