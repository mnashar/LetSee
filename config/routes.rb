Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :products
    resources :cart_items, only: [:index, :show, :create, :destroy]
  end

  root "static_pages#root"
end

