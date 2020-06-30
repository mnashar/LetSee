class Api::ReviewsController < ApplicationController

     before_action only: [:create, :edit, :delete]

    def index 
        product = Product.find(params[:product_id])
        @reviews = product.reviews 
        render :index 
    end
    
    def create
        product = Product.find(params[:product_id])
        item_id = product.id
        

        puts "*"
        puts "*"
        puts "*"
        puts review_params
        puts "*"
        puts "*"
        puts "*"
        
        @review = Review.new(review_params)
        @review.item_id = item_id
        @review.author_id = current_user.id
        
        if @review.save 
            puts "okokokokokokokokokokokokokokokokokokokokok"
            render :show
        else
            puts "nonononononono.........."
            puts @review.errors.full_messages
            puts "nonononononono.........."
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


    #def review_params
     #   params.require[:review].permit[:title, :body, :rating, :productId, :author_id]
    #end

  def review_params
        params.require(:review).permit(:rating, :body, :title, :id)
    end
end
