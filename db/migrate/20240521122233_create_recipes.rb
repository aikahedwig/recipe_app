class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :ingredients
      t.text :instructions
      t.references :user, null: false, foreign_key: true
      t.text :nutritional_info

      t.timestamps
    end
  end
end
