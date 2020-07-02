class Api::ProductsController < ApplicationController

    def index

        if Product.all
            @products = Product.all
            render :index
        else
           render json: @products.errors.full_messages, status: 422 
        end
    end

    def search
        query=params[:query]
        
        @products = Product.where('name ILIKE ? OR description ILIKE ?', "%#{query}%","%#{query}%")
        # Product.where("name like ? AND locked = ?", params[:orders], false)
        if @products.length>0
            render :index
        else
            render json: ["We couldn't find any results for #{query}","Try searching for something else instead?"], status: 422 
        end
    end

    def show
        @product = Product.find(params[:id])
    end

    def create
        @product = Product.new(product_params)

        if @product.save
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    def update
        @product = Product.find(params[:id])
        if @product.update(product_params)
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

     def destroy
        @product = Product.find(params[:id])

        if @product.destroy
            render :show
        else
            render json: @product.errors.full_messages, status: 422
        end
    end

    private

    def product_params
        params.require(:product).permit(:name, :description, :price, :artist_id, :photourl, :category_id)
    end
end
