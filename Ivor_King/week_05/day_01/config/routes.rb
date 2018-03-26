Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root :to => 'pages#home'

  get '/magic' => 'magic#lander'
  get '/secretnum' => 'secretnum#lander'
  get '/rocks' => 'rocks#lander'
  get '/magic/answer' => 'magic#answer'
  get '/secretnum/answer' => 'secretnum#answer'
  get '/rocks/:throw' => 'rocks#play'
end
