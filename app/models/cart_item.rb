class CartItem < ApplicationRecord
    
    belongs_to :customer,
    foreign_key: :customer_id,
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
