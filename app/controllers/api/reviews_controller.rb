class Api::ReviewsController < ApplicationController

     before_action :require_login, only: [:create, :edit, :delete]

    def index 
        product = Product.find(params[:item_id])
        @reviews = product.reviews 
        render :index 
    end
    
    def create
        product = Product.find(params[:item_id])
        item_id = product.id
        

        @review = Review.new(review_params)
        @review.item_id = item_id
        @review.user_id = current_user.id
        
        if @review.save 
            render :show
        else
            render json: @review.errors.full_messages
        end
    end

    def update 
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages
        end
    end


    def review_params
    params.require[:review].permit[:title, :body, :rating, :item_id, :author_id]
  end
end
