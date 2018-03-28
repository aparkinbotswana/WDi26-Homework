class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.text :name
      t.integer :year
      t.text :director
      t.text :rating
      t.text :image
      t.timestamps
    end
  end
end
