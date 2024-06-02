Rails.application.routes.draw do
  root 'users#new'
  get 'signup', to: 'users#new'
  get '/my_account', to: 'users#show'
  resources :users, only: [:create, :index, :show]

  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
end
