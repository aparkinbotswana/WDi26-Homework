# == Schema Information
#
# Table name: characters
#
#  id          :integer          not null, primary key
#  name        :string
#  age         :integer
#  dob         :date
#  description :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  movie_id    :integer
#

class Character < ActiveRecord::Base
  belongs_to :movie, :optional => true #make sure movie is singular as a character can only belong to one movie. Add optional to let user create a character that doesn't belong in any movie. 
end
