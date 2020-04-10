require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# faker
50.times do
Product.create([{
    name: Faker::Commerce.product_name ,
    description: Faker::Lorem.sentence(1) ,
    price: Faker::Commerce.price,
    artist_id: 1

}])
end
# create_table "products", force: :cascade do |t|
#     t.string "name"
#     t.string "description"
#     t.string "photourl"
#     t.string "string"
#     t.decimal "price"
#     t.integer "artist_id"
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#   end