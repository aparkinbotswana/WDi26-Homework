Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'

  ### Magic 8 Ball Controller ###
  get '/magic8_index' => 'magic8#magic8_index'
  get '/magic8_answer' => 'magic8#magic8_answer'


  ## Secret Number Controller ###
  get '/secretnum_index' => 'secretnum#secretnum_index'
  get '/secretnum_result' => 'secretnum#secretnum_result'

  ## Rock Paper Scissors Controller ##
  get '/rps_index' => 'rps#rps_index'
  get '/rps_winlose' => 'rps#rps_winlose'

end
