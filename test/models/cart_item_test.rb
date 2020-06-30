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
require 'test_helper'

class CartItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
