json.set! @contact.id do 
    json.extract! @contact, :id, :first_name, :last_name, :address_one, :address_two, :city, :country, :state, :state, :zipcode, :phone, :user_id 
end 