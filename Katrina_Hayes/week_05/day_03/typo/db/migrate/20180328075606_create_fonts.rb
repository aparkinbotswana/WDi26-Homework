class CreateFonts < ActiveRecord::Migration[5.1]
  def change
    create_table :fonts do |t|
      t.text :name
      t.text :alphabet
      t.text :description
      t.timestamps
    end
  end
end
