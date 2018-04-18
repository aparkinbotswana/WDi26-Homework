Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'mountains#home'
  get '/mountains_index' => 'mountains#index'
  get '/mountains_new' => 'mountains#new'
  post '/mountains' => 'mountains#create'
  get '/mountains/:id' => 'mountains#show', :as => 'mountain'
  delete '/mountains/:id' => 'mountains#destroy'
  get '/mountains/:id/edit' => 'mountains#edit', :as => 'mountains_edit'
  post '/mountains/:id' => 'mountains#update'
end
