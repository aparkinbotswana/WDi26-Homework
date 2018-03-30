# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Mountain.destroy_all

Mountain.create :name => 'Mount Kosciuszko', :elevation => '2,228 m (7,310 ft)', :prominence => '2,228 m (7,310 ft)', :state => 'New South Wales'
Mountain.create :name => 'Mount Ossa', :elevation => '1,617 m (5,305 ft)', :prominence => '1,617 m (5,305 ft)', :state => 'Tasmania'
Mountain.create :name => 'Mount Zeil', :elevation => '1,531 m (5,023 ft)', :state => 'Northern Territory'
Mountain.create :name => 'Mount Bogong', :elevation => '1,986 metres (6,516 ft)', :prominence => '1,233 metres (4,045 ft)', :state => 'Victoria'
