Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root "static_pages#root" # this will route 

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :index]
    resources :categories, only: [:index]
    resources :products, only: [:index]
    resources :orders, only: [:create, :index, :update]
    resources :ordered_products, only: [:update]
    resource :session, only: [:create, :destroy]
  end

end
