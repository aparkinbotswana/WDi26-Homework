Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to => 'pages#home'
  get '/home' => 'pages#home'

  get '/magic8' => 'eightball#form'
  get '/magic8/answer' => 'eightball#answer'

  get '/secretnumbers' => 'secretnumber#numbers'
  get '/secretnumbers/generate' => 'secretnumber#generate'
  get '/secretnumbers/result' => 'secretnumber#result'

  get '/games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors_play'

end
