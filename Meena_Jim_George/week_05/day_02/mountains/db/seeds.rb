# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all
Mountain.create :name => 'Mount Everest',:height => 8848, :years=>22,:country => 'China'
Mountain.create :name => 'Mount Kilimanjaro',:height => 445, :years=>12 ,:country => 'Tanzania'
Mountain.create :name => 'mount',:height => 55 ,:years=>22, :country => 'rrrrr'
