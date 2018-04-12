# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

FontFamily.destroy_all
FontFamily.create(:name => 'Serif')
FontFamily.create(:name => 'Sans Serif')
FontFamily.create(:name => 'Display')
FontFamily.create(:name => 'Handwriting')
FontFamily.create(:name => 'Monospace')


Font.destroy_all
Font.create(:name => 'IBM Sans Condensed')
Font.create(:name => 'IBM Plex Serif')
