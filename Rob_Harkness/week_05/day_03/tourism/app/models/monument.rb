# == Schema Information
#
# Table name: monuments
#
#  id          :integer          not null, primary key
#  name        :text
#  year        :text
#  description :text
#  image       :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Monument < ActiveRecord::Base
  belongs_to :city, optional: true
end
