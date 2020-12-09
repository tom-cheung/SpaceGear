class ApplicationController < ActionController::Base
    helper_method: current_user # makes this available to your views... 
    # CRLLL 

    def current_user 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_login

    end

    def login(user)
        user.reset_session_token! 
        session[:session_token] = user.session_token
        @current_user = user
    end

    def logged_in? 
        !!current_user
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil 
        @current_user = nil 
    end
end
