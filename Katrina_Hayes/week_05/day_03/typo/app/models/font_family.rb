# == Schema Information
#
# Table name: font_families
#
#  id              :integer          not null, primary key
#  name            :text
#  description     :text
#  famous_examples :text
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class FontFamily < ActiveRecord::Base
  has_many :fonts
end
