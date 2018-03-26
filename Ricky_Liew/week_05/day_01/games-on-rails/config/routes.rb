Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  get '/magic8ball' => 'magic8ball#form'
  get '/magic8ball/answer' => 'magic8ball#answer'

  get '/rockpaperscissors' => 'rockpaperscissors#form'
  get '/rockpaperscissors/result' => 'rockpaperscissors#result'

  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/guess' => 'secretnumber#guess'
end
