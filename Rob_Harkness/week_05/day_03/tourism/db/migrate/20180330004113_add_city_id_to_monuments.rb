class AddCityIdToMonuments < ActiveRecord::Migration[5.1]
  def change
    add_column :monuments, :city_id, :integer
  end
end
