# == Route Map
#
#         Prefix Verb   URI Pattern                    Controller#Action
#     characters GET    /characters(.:format)          characters#index
#                POST   /characters(.:format)          characters#create
#  new_character GET    /characters/new(.:format)      characters#new
# edit_character GET    /characters/:id/edit(.:format) characters#edit
#      character GET    /characters/:id(.:format)      characters#show
#                PATCH  /characters/:id(.:format)      characters#update
#                PUT    /characters/:id(.:format)      characters#update
#                DELETE /characters/:id(.:format)      characters#destroy
#         movies GET    /movies(.:format)              movies#index
#                POST   /movies(.:format)              movies#create
#      new_movie GET    /movies/new(.:format)          movies#new
#     edit_movie GET    /movies/:id/edit(.:format)     movies#edit
#          movie GET    /movies/:id(.:format)          movies#show
#                PATCH  /movies/:id(.:format)          movies#update
#                PUT    /movies/:id(.:format)          movies#update
#                DELETE /movies/:id(.:format)          movies#destroy
# 

Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :characters
  resources :movies
end
