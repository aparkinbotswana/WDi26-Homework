# == Schema Information
#
# Table name: oceans
#
#  id              :integer          primary key
#  name            :text
#  location        :text
#  surface_percent :float
#  fun_fact        :text
#  image           :text
#

class Ocean < ActiveRecord::Base
end 
