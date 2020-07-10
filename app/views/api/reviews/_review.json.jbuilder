# json.extract! review, :id, :title, :body, :rating, :item_id, :author_id

json.extract! review, :id, :body, :rating, :item_id, :author_id
json.userName review.user.name
json.profilePicUrl url_for(review.user.profile_pic)


