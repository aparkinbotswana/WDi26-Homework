# == Route Map
#
#      Prefix Verb   URI Pattern                 Controller#Action
#     ideologies GET    /ideologies(.:format)          ideologies#index
#             POST   /ideologies(.:format)          ideologies#create
#  new_artist GET    /ideologies/new(.:format)      ideologies#new
# edit_artist GET    /ideologies/:id/edit(.:format) ideologies#edit
#      artist GET    /ideologies/:id(.:format)      ideologies#show
#             PATCH  /ideologies/:id(.:format)      ideologies#update
#             PUT    /ideologies/:id(.:format)      ideologies#update
#             DELETE /ideologies/:id(.:format)      ideologies#destroy
#       politicians GET    /politicians(.:format)            politicians#index
#             POST   /politicians(.:format)            politicians#create
#    new_work GET    /politicians/new(.:format)        politicians#new
#   edit_work GET    /politicians/:id/edit(.:format)   politicians#edit
#        work GET    /politicians/:id(.:format)        politicians#show
#             PATCH  /politicians/:id(.:format)        politicians#update
#             PUT    /politicians/:id(.:format)        politicians#update
#             DELETE /politicians/:id(.:format)        politicians#destroy
#

Rails.application.routes.draw do
  root :to => 'politicians#index'
  resources :ideologies # Plural
  resources :politicians
end
