Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#magic'
  get '/secret' => 'secret#secret'
  get '/rock' => 'rock#rock'
end
