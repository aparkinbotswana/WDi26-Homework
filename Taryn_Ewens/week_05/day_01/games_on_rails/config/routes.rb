Rails.application.routes.draw do

  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic8' => 'magic8#game'
  get '/magic8/results' => 'magic8#results'

  get '/secret_number' => 'secret_number#game'
  get '/secret_number/results' => 'secret_number#results'

  get '/rock_paper_scissors' => 'rock_paper_scissors#game'
  get '/rock_paper_scissors/results' => 'rock_paper_scissors#results'


end
