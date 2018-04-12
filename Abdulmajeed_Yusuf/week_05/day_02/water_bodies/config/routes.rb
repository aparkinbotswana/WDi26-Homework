Rails.application.routes.draw do
  root :to => 'oceans#index'
  get '/oceans' => 'oceans#index'
  get '/oceans/new' => 'oceans#new'
  post '/oceans' => 'oceans#create'
  get 'oceans/:id' => 'oceans#show', :as => 'ocean'

end
