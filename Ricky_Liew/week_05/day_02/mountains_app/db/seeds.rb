# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Mountain.destroy_all

Mountain.create :name => 'Himalayas', :continent => 'Asia', :peak_name => 'Mount Everest', :peak_height => 8848, :pic_url => 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mount-Everest.jpg/560px-Mount-Everest.jpg'
Mountain.create :name => 'Karakoram', :continent => 'Asia', :peak_name => 'K2', :peak_height => 8611, :pic_url => 'https://upload.wikimedia.org/wikipedia/commons/1/12/K2_2006b.jpg'
Mountain.create :name => 'Pamir', :continent => 'Asia', :peak_name => 'Tirich Mir', :peak_height => 7708, :pic_url => 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Tirich_Mir_%28The_Kingdom_Of_Djinns_And_Fairies%29.jpg/2560px-Tirich_Mir_%28The_Kingdom_Of_Djinns_And_Fairies%29.jpg'
