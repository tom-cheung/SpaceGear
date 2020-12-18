@orders.each do |order|

    json.set! order.id do 
        json.extract! order, :id, :purchaser_id, :address_id, :payment_id, :total
    end

end