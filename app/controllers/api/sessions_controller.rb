class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:email], params[:password])

        if @user 
            login(@user)
            render 'api/users/show'
        else 
            render json: ["invalid email or password"], status: 401 
        end
    end

    def destroy 
        @user = current_user 
        if @user 
            self.logout!
            render "api/users/show"
        else
            render json: ["Not logged in"], status: 404
        end
    end
end

#  you need routes if you have a controller 