Rails.application.routes.draw do
  root :to => 'mountains#index'
  get 'mountains' => 'mountains#index'
  get '/mountains/new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  get '/mountains/:id/edit' => 'mountains#edit', :as => 'mountains/edit'
  post '/mountains/:id' => 'mountains#update'
  delete '/mountains/:id' => 'mountains#destroy'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
