class CreateDirectors < ActiveRecord::Migration[5.1]
  def change
    create_table :directors do |t|
      t.text :name
      t.date :dob
      t.text :image
      t.timestamps
    end
  end
end
