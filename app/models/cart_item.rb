# == Schema Information
#
# Table name: cart_items
#
#  id          :bigint           not null, primary key
#  customer_id :integer
#  product_id  :integer
#  quantity    :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class CartItem < ApplicationRecord
    
    belongs_to :customer,
    foreign_key: :customer_id,
    class_name: :User

    belongs_to :product,
    foreign_key: :product_id,
    class_name: :Product
end
