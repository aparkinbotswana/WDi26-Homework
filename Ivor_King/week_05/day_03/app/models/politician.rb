# == Schema Information
#
# Table name: politicians
#
#  id           :integer          not null, primary key
#  name         :text
#  age          :integer
#  state        :text
#  image        :text
#  ideology_id  :integer
#

class Politician < ActiveRecord::Base
  belongs_to :ideology, :optional => true
end
