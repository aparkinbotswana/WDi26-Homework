Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => 'pages#home'

get '/home' => 'pages#home'

get '/magic8ball' => 'magic8ball#home'
get '/ask/:question' => 'magic8ball#ask'

get '/secretnumber' => 'secretnumber#home'
get '/guess' => 'secretnumber#guess'

get '/rockpaperscissors' => 'rockpaperscissors#home'
get '/rockpaperscissors/rock' => 'rockpaperscissors#rock'
get '/rockpaperscissors/scissors' => 'rockpaperscissors#scissors'
get '/rockpaperscissors/paper' => 'rockpaperscissors#paper'
end
