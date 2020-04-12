FactoryBot.define do
  factory :cart_item do
    customer_id { 1 }
    product_id { 1 }
    quantity { 1 }
  end
end
