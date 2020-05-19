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
FactoryBot.define do
  factory :cart_item do
    customer_id { 1 }
    product_id { 1 }
    quantity { 1 }
  end
end
