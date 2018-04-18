# == Schema Information
#
# Table name: movies
#
#  id         :integer          not null, primary key
#  name       :text
#  year       :integer
#  director   :text
#  rating     :text
#  image      :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Movie < ActiveRecord::Base
  has_many :characters #this is telling rails to link the characters db and movies db together. Make sure to use plural for characters.
end
