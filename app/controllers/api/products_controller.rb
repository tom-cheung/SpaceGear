class Api::ProductsController < ApplicationController

    def index
        @products = Product.all

        if @products
            render 'api/products/index'
        else

        end
    end
end
