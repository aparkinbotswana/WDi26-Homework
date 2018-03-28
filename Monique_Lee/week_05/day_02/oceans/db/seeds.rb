# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Ocean.destroy_all

Ocean.create :name => 'Arctic Ocean', :area => 14056000, :depth => 1038, :volume => 18070000
Ocean.create :name => 'Atlantic Ocean', :area => 106460000, :depth => 3646, :volume => 310410900
Ocean.create :name => 'Indian Ocean', :area => 70560000, :depth => 3741, :volume => 264000000
Ocean.create :name => 'Pacific Ocean', :area => 161800000, :depth => 4280, :volume => 710000000
Ocean.create :name => 'Southern Ocean', :area => 20330000, :depth => 4000, :volume => 71800000
