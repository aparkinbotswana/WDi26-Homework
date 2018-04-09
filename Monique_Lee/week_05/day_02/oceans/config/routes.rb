Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'oceans#index'

  get '/oceans' => 'oceans#index' # oceans_path

  get '/oceans/new' => 'oceans#new'

  post '/oceans' => 'oceans#create' # oceans_path

  get '/oceans/:id' => 'oceans#show', :as => 'ocean' # ocean_path

  get '/oceans/:id/edit' => 'oceans#edit', :as => 'oceans_edit'

  post '/oceans/:id' => 'oceans#update'

  delete '/oceans/:id' => 'oceans#destroy'

end
