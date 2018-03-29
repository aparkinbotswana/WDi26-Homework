# == Schema Information
#
# Table name: mountains
#
#  id         :integer          primary key
#  name       :text
#  elevation  :text
#  prominence :text
#  isolation  :text
#  state      :text
#  image      :text
#

class Mountain < ActiveRecord::Base
end
