Rails.application.routes.draw do
  root :to => 'pages#home'

  get '/magic8' => 'magic8#form'
  get '/magic8/lookup' => 'magic8#lookup'

  get '/secretnumber' => 'secretnumber#form'
  get '/secretnumber/lookup' => 'secretnumber#lookup'

  get '/rockpaperscissors' => 'rockpaperscissors#form'
  get '/rockpaperscissors/play' => 'rockpaperscissors#play'


end
