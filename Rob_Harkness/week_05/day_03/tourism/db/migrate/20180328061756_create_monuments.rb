class CreateMonuments < ActiveRecord::Migration[5.1]
  def change
    create_table :monuments do |t|
      t.text :name
      t.text :year
      t.text :description
      t.text :image

      t.timestamps
    end
  end
end
