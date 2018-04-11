class CreateMovies < ActiveRecord::Migration[5.1]
  def change
    create_table :movies do |t|
      t.text :title
      t.text :year
      t.text :genre
      t.text :duration
      t.text :image
      t.integer :director_id
      t.timestamps
    end
  end
end
