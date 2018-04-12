# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#
#
City.destroy_all
City.create(name: 'Berlin', country: 'Germany')
City.create(name: 'Sydney', country: 'Australia')


Monument.destroy_all
Monument.create(name: 'Brandeburger Tor', description: 'A big victory gate')
Monument.create(name: 'Sydney Opera House', description: 'Opera House')