Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

root :to => 'pages#home'

get '/home' => 'pages#home'

get '/about' => 'pages#about'


get '/games/magic_8_ball' => 'games#magic_8_ball'

get '/games/magic_8_ball/:question' => 'games#magic_8_ball'


get '/games/secret_number' => 'games#secret_number'

get '/games/secret_number_answer' => 'games#secret_number_answer'




get '/games/rock_paper_scissors' => 'games#rock_paper_scissors'

get '/games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors_play'


end
