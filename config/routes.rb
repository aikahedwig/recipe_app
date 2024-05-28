Rails.application.routes.draw do
  root 'users#new'
  get 'signup', to: 'users#new'
  get '/my_account', to: 'users#show'
  resources :users, only: [:create]
end
