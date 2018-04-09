Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/home' => "pages#home"

  get '/game' => "game#play"
end
