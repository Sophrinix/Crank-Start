Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :show]
    resources :users, only: [:create]
    resources :searches, only: [:index]
    resources :projects do
      resources :rewards, only: [:index]
    end
    resources :rewards, except: [:edit, :update, :index]
  end

  root "static_pages#root"
end
