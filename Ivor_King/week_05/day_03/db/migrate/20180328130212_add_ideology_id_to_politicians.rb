class AddIdeologyIdToPoliticians < ActiveRecord::Migration[5.1]
  def change
    add_column :politicians, :ideology_id, :integer
  end
end
