json.extract! user, :id, :email

json.set! 'user' do 
    json.extract! user, :id, :email
end


json.set! 'orders' do 
    #json.array! user.orders, :id, :total
    user.orders.each do |order|
        json.set! order.id do 
            json.extract! order, :id, :purchaser_id, :address_id, :total
        
            json.set! 'ordered_product' do 
                json.array! order.ordered_products, :id, :order_id, :product_id, :quantity
            end

        end
    end
end