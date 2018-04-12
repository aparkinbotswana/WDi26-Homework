class CreateFontFamilies < ActiveRecord::Migration[5.1]
  def change
    create_table :font_families do |t|
      t.text :name
      t.text :description
      t.text :famous_examples
      t.timestamps
    end
  end
end
