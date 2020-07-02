#json.array! @categories do |category|
#    json.partial! 'api/categories/category', category: category 
#end

@categories.each do |category|
    json.set! category.id do 
        json.partial! 'category', category: category
    end
end