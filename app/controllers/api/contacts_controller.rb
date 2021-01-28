class Api::ContactsController < ApplicationController

    def create 
        @contact = Contact.new(contact_params)

        if @contact.save 
            render 'api/contacts/show'
        else
            render json: @contact.errors.full_messages, status: 422
        end
    end

    def index 
        @user = User.find_by(id: params[:user_id])

        if @user 
            @contacts = @user.contacts 

            render 'api/contacts/index' 
        else
            render json: ["user not found"], status: 404
        end
    end

    def update 
        @contact = Contact.find_by(id: contact_params[:id])

        if @contact

            if @contact.update(contact_params)
                render 'api/contacts/show'
            else
                render json: @contact.errors.full_messages, status: 422
            end

        else
            render json: ["contact information not found"], status: 404
        end
    end

    def destroy
        @contact = Contact.find_by(id: params[:id])

        if @contact
            
            @contact.destroy 
            render 'api/contacts/show'

        else
            render json: ["contact information not found"], status: 404
        end
    end

    private 

    def contact_params 
        params.require(:contact).permit(:first_name, :last_name, :address_one, :address_two, :city, :country, :state,
                                        :zipcode, :phone, :user_id, :id)
    end
end
