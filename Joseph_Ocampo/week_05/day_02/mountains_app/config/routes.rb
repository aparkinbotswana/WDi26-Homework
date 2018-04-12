Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root :to => 'mountains#index'
get '/mountains' => 'mountains#index' # = plants_path
get '/mountains/new' => 'mountains#new'
get '/mountains/:id' => 'mountains#show', :as => 'mountain'
# post '/planets' => 'planets#create' # implicitly planets_path

get '/mountain/:id/edit' => 'mountains#edit', :as => 'mountains_edit'
# post '/planets/:id' => 'planets#update'
# delete '/planets/:id' => 'planets#destroy'

end
