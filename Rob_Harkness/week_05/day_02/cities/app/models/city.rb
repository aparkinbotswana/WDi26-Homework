# == Schema Information
#
# Table name: cities
#
#  id         :integer          primary key
#  name       :text
#  image      :text
#  country    :text
#  population :integer
#  wikilink   :text
#

class City < ActiveRecord::Base
  
end
