# == Schema Information
#
# Table name: fonts
#
#  id          :integer          not null, primary key
#  name        :text
#  alphabet    :text
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Font < ActiveRecord::Base
  belongs_to :font_family, :optional => true
end
