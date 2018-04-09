class CreateCities < ActiveRecord::Migration[5.1]
  def change
    create_table :cities do |t|
      t.text :name
      t.text :country
      t.integer :population
      t.text :image

      t.timestamps
    end
  end
end
