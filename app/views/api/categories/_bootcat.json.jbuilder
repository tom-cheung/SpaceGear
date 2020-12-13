fetch_cat.each do |category|
    json.set! category.id do 
        json.extract! category, :id, :category_name
        json.set! 'product_types' do 
            json.array! category.types, :id, :type_name
        end
    end
end