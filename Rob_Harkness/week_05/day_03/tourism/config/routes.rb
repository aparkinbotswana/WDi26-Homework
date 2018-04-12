# == Route Map
#
#          Prefix Verb   URI Pattern                   Controller#Action
# monuments_index GET    /monuments/index(.:format)    monuments#index
#  monuments_show GET    /monuments/show(.:format)     monuments#show
#   monuments_new GET    /monuments/new(.:format)      monuments#new
#  monuments_edit GET    /monuments/edit(.:format)     monuments#edit
#    cities_index GET    /cities/index(.:format)       cities#index
#     cities_show GET    /cities/show(.:format)        cities#show
#      cities_new GET    /cities/new(.:format)         cities#new
#     cities_edit GET    /cities/edit(.:format)        cities#edit
#            root GET    /                             citties#index
#          cities GET    /cities(.:format)             cities#index
#                 POST   /cities(.:format)             cities#create
#        new_city GET    /cities/new(.:format)         cities#new
#       edit_city GET    /cities/:id/edit(.:format)    cities#edit
#            city GET    /cities/:id(.:format)         cities#show
#                 PATCH  /cities/:id(.:format)         cities#update
#                 PUT    /cities/:id(.:format)         cities#update
#                 DELETE /cities/:id(.:format)         cities#destroy
#       monuments GET    /monuments(.:format)          monuments#index
#                 POST   /monuments(.:format)          monuments#create
#    new_monument GET    /monuments/new(.:format)      monuments#new
#   edit_monument GET    /monuments/:id/edit(.:format) monuments#edit
#        monument GET    /monuments/:id(.:format)      monuments#show
#                 PATCH  /monuments/:id(.:format)      monuments#update
#                 PUT    /monuments/:id(.:format)      monuments#update
#                 DELETE /monuments/:id(.:format)      monuments#destroy
# 

Rails.application.routes.draw do
  root to: 'cities#index'
  resources :cities
  resources :monuments
end
