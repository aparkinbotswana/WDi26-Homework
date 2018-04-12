class CreateIdeologies < ActiveRecord::Migration[5.1]
    def change
      create_table :ideologies do |t|
        t.text :name
        t.text :country
        t.date :created
      end
    end
  end