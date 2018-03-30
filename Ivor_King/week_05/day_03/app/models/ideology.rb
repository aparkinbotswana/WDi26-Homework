# == Schema Information
#
# Table name: ideologies
#
#  id          :integer          not null, primary key
#  name        :text
#  country     :text
#  created     :integer
#

class Ideology < ActiveRecord::Base
  has_many :politicians
end
