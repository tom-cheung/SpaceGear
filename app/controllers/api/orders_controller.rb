class Api::OrdersController < ApplicationController

    def create 
        @order = Order.new(order_params)

        if @order.save 
            render 'api/orders/show'
        else
            render json: @order.errors.full_messages, status: 422
        end
    end

    def index 
        @current_user = current_user
        if @current_user
            @orders = @current_user.orders 
            render 'api/orders/index'
        else
            render json: ["Not logged in"], status: 404
        end
    end

    def update 
        @order = Order.find_by(id: params[:id])

        if @order.update(order_params)
            render 'api/orders/show'
        else
            render json: @order.errors.full_messages, status: 422
        end

    end

    def destroy 
        @order = Order.find_by(id: params[:id])

        if @order 
            @order.destroy
            render 'api/orders/show'
        else
            render json: ["some error!"], status: 422
        end
        
    end

    private

    def order_params 
        # utilizing nested attributes to write to multiple tables  
        params.require(:order).permit(:purchaser_id, :total, :address_id, ordered_products_attributes: [:id, :product_id, :quantity, :_destroy])
    end
    
    #  need ordered_products_attributes in order to pass in additional attributed to the associated models 
    #  if there is only one attribute that needs to be passed in then you can write something like 
    # Order.create(purchaser_id: 31, total: 99, products_ids: [31]) 
    # this would create an entry on the ordered_products table with a order_id belonging to the order just created
    # notice you need to specify products_ids and not just the attribute product_id.  
end
