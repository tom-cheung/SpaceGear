@orders.each do |order|

    json.set! order.id do 
        json.extract! order, :id, :purchaser_id, :address_id, :payment_id, :total

        json.set! 'ordered_product' do 
            json.array! order.ordered_products, :id, :order_id, :product_id, :quantity
        end
    end

    

end