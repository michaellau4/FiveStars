Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :businesses, only: [:show, :index] do
      resources :reviews, only: [:index, :show, :create, :update, :destroy]
    end
  end
  
end
