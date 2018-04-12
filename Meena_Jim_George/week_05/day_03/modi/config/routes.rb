Rails.application.routes.draw do

  
# root :to =>'works#index'
  resources :directors
  resources :movies


end
