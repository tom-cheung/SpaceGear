# json.array! @categories, :id, :category_name

# json.array! @categories do |category|
#     json.id category.id
#     json.test do 
#         json.name category.category_name
#     end
# end

@categories.each do |category|
    json.set! category.id do 
        # json.partial! 'category', category: category
        json.extract! category, :id, :category_name
    end
end