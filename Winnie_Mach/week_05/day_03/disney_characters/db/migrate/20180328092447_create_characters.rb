class CreateCharacters < ActiveRecord::Migration[5.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :age
      t.date :dob
      t.text :description
      t.text :image
      t.timestamps
    end
  end
end
