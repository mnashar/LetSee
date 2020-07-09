json.extract! product, :id, :name, :description, :price, :artist_id, :photourl, :category_id
json.reviewsLength product.reviews.length
if product.images.attached?
    json.imageUrls product.images.map { |file| url_for(file) }
end   