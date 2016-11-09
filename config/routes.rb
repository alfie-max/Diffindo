Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show] do
      resources :friends, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :bills
    resources :splits, only: [:create, :update, :destroy]
  end

end
