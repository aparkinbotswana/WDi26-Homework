class AddMovieIdToCharacters < ActiveRecord::Migration[5.1]
  def change
    add_column :characters, :movie_id, :integer
  end
end
