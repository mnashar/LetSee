class Api::CartItemsController < ApplicationController
    def index
        @cart_items = current_user.cart_items
        # debugger;
        render :index
    end

    def create
        @cart_item = CartItem.new(cart_items_params)
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        @cart_item.destroy
        # @cart_items=CartItem.all
        render :show
    end

    private
    def cart_items_params
        params.require(:cartItem).permit(:product_id, :customer_id, :quantity)
    end
end 
