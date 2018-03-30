class CreatePoliticians < ActiveRecord::Migration[5.1]
    def change
      create_table :politicians do |t|
        t.text :name
        t.integer :age
        t.text :state
        t.text :image
      end
    end
  end
  