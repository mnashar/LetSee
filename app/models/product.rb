class Product < ApplicationRecord
    
    validates :name, :price, :description, presence: true

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User,
    optional: true
end
