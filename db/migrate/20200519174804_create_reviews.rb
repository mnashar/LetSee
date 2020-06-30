class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :title
      t.string :body
      t.string :rating
      t.integer :item_id
      t.integer :author_id

      t.timestamps
    end
    add_index :reviews, :item_id
    add_index :reviews, :author_id
  end
end
