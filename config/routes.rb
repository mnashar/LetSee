Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :products do
      collection do
        get :search, to: "products#search", as: "search"
      end
    end
    resources :cart_items, only: [:index, :show, :create, :destroy]
    # resources :search_products, only: [:index]
  end

  root "static_pages#root"
end

