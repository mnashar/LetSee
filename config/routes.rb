Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :user, only: [:create, :show]
    resource :session, only: [:create, :destroy, :show]
    resources :products, except: [:new]
  end

  root "static_pages#root"
end

