class AddPhotourlToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :photourl, :string
  end
end
