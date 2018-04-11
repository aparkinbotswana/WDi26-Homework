class AddFontFamilyIdToFonts < ActiveRecord::Migration[5.1]
  def change
    add_column :fonts, :font_family_id, :integer
  end
end
