# current_user.cart_items.each do |cart_item|
#     json.set! cart_item.id do 
#         json.extract! :customer_id
#     end
# end
json.cartItems do 
    @cart_items.each do |cart_item| 
        json.set! cart_item.id do 
            json.extract! cart_item, :id, :customer_id, :quantity, :product_id
            # json.product do 
            #     json.partial! "api/products/product", product: cart_item.product 
            # end
            json.deleted false
        end
    end  
end

json.products do
     @cart_items.each do |cart_item| 
        json.set! cart_item.product_id do 
            json.partial! "api/products/product", product: cart_item.product 
        end
    end  
end
