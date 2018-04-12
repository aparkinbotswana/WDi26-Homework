Rails.application.routes.draw do
  root :to => '#index'
  get '/oceans' => 'oceans#index' # oceans_path
  get '/oceans/new' => 'oceans#new'
  post '/oceans' => 'oceans#create' # implicityly oceans_path
  get '/oceans/:id' => 'oceans#show', :as => 'planet' # planet_path
  get '/oceans/:id/edit' => 'oceans#edit', :as => 'oceans_edit'
  post '/oceans/:id' => 'oceans#update'
  delete '/oceans/:id' => 'oceans#destroy'
end
