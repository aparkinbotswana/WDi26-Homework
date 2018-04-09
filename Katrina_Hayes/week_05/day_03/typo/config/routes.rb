# == Route Map
#
#           Prefix Verb   URI Pattern                       Controller#Action
#             root GET    /                                 fonts#index
#    font_families GET    /font_families(.:format)          font_families#index
#                  POST   /font_families(.:format)          font_families#create
#  new_font_family GET    /font_families/new(.:format)      font_families#new
# edit_font_family GET    /font_families/:id/edit(.:format) font_families#edit
#      font_family GET    /font_families/:id(.:format)      font_families#show
#                  PATCH  /font_families/:id(.:format)      font_families#update
#                  PUT    /font_families/:id(.:format)      font_families#update
#                  DELETE /font_families/:id(.:format)      font_families#destroy
#            fonts GET    /fonts(.:format)                  fonts#index
#                  POST   /fonts(.:format)                  fonts#create
#         new_font GET    /fonts/new(.:format)              fonts#new
#        edit_font GET    /fonts/:id/edit(.:format)         fonts#edit
#             font GET    /fonts/:id(.:format)              fonts#show
#                  PATCH  /fonts/:id(.:format)              fonts#update
#                  PUT    /fonts/:id(.:format)              fonts#update
#                  DELETE /fonts/:id(.:format)              fonts#destroy
# 

Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'fonts#index'
  resources :font_families # this should be plural
  resources :fonts
end
