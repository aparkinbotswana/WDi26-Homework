Rails.application.routes.draw do
  root to: 'cities#index'

  get '/cities', to: 'cities#index'
  get '/cities/new', to: 'cities#new'
  post '/cities', to: 'cities#create'
  get '/cities/:id', to: 'cities#show', as: 'city'

  get '/cities/:id/edit' => 'cities#edit', :as => 'cities_edit'
  post '/cities/:id' => 'cities#update'
  delete '/cities/:id' => 'cities#destroy'
end
