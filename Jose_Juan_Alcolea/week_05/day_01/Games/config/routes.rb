Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/magic_ball' => 'magic_ball#form'
  get '/rock_paper_scisors' => 'rock_paper_scisors#form'
  get '/secret_number' => 'secret_number#form'
end
