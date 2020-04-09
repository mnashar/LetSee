class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :photourl
      t.string :string
      t.decimal :price
      t.integer :artist_id

      t.timestamps
    end
  end
end
