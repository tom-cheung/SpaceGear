class Api::ContactsController < ApplicationController

    def create 
        @contact = Contact.new(contact_params)

        if @contact.save 
            render 
        else
            render json: @contact.errors.full_messages, status: 422
        end
    end

    def index 
        @contacts = User.find_by(id: params[:user_id]).contacts

        render json: @contacts

    end

    private 

    def contact_params 
        params.require(:contact).permit(:first_name, :last_name, :address_one, :address_two, :city, :country, :state,
                                        :zipcode, :phone, :user_id)
    end
end
