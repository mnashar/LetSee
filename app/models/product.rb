# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string
#  description :string
#  photourl    :string
#  string      :string
#  price       :decimal(, )
#  artist_id   :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Product < ApplicationRecord
    
    validates :name, :price, :description, presence: true

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User,
    optional: true

    has_many :cart_items, 
    foreign_key: :product_id,
    class_name: :CartItem

    has_one_attached :photo

    has_many :reviews,
    class_name: "Review",
    primary_key: :id,
    foreign_key: :item_id

    belongs_to :category
end
