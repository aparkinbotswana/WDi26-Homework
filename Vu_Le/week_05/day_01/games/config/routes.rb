Rails.application.routes.draw do
  root :to => 'pages#home'

get '/magic8/question' => 'magic8#magic8_question'
get '/magic8/answer' => 'magic8#magic8_answer'
get '/magic8' => 'magic8#magic8_question'

get '/secret/question' => 'secret#secret_question'
get '/secret/answer' => 'secret#secret_answer'
get '/secret' => 'secret#secret_question'

end
