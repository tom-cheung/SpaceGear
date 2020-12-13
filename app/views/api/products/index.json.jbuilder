@products.each do |product|
    json.set! product.id do 
        json.extract! product, :id, :product_name, :type_id, :color, :size, :price, :description, :category_id
    end
end