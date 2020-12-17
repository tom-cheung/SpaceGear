json.set! @order.id do 
    json.extract! @order, :id, :total, :address_id, :payment_id
end

