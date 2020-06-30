# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  title      :string
#  body       :string
#  rating     :string
#  item_id    :integer
#  author_id  :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
FactoryBot.define do
  factory :review do
    title { "MyString" }
    body { "MyString" }
    rating { "MyString" }
    item_id { 1 }
    author_id { 1 }
  end
end
