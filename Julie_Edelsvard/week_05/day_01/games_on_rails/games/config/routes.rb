Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/game' => 'magic#game'

  get '/secret_number' => 'secret_number#form'
  get '/secret_number/game' => 'secret_number#game'

  get '/rps' => 'rps#form'
  get '/rps/game' => 'rps#game'
end
