Rails.application.routes.draw do
root :to => 'mountains#index'
get '/mountains' =>'mountains#index'
get '/mountains/new' =>'mountains#new'
post '/mountains'=>'mountains#create'#implicitly mountain path
get '/mountains/:id' => 'mountains#show', :as =>'mountain'#mountain_path
get '/mountains/:id/edit' => 'mountains#edit', :as =>'mountains_edit'
post '/mountains/:id' => 'mountains#update'
delete '/mountains/:id'=> 'mountains#destroy'
end
