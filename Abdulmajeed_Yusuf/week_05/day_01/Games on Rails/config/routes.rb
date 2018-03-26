Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic' => 'magic#form'
  get '/magic/lookup' => 'magic#lookup'

  # get '/secret' => 'secret#form'
end
