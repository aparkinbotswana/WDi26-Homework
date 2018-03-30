Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic' => 'magic#magic'
  get '/magic/result' => 'magic#result'

  get '/number' => 'number#number'
  get '/number/result' => 'number#result'

  get '/rps' => 'rps#rps'
  get '/rps/result' => 'rps#result'
end
