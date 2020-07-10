json.extract! user, :id, :email, :name, :photourl
json.profilePicUrl url_for(user.profile_pic)