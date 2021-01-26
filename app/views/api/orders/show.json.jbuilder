json.set! @order.id do 
    json.extract! @order, :id, :total, :address_id, :payment_id

    json.set! 'ordered_product' do 
            json.array! @order.ordered_products, :id, :order_id, :product_id, :quantity
    end
end

