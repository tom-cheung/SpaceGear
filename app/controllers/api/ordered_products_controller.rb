class Api::OrderedProductsController < ApplicationController

    def destroy
        @ordered_product = OrderedProduct.find_by(id: contact_params[:id])

        # if(@ordered_product) {
        #     @ordered_product.destroy
        #     render 'api/'
        # }
    end


end