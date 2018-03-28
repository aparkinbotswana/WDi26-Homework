Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root :to =>'pages#home'
  get '/magicball'=>'magicball#magicball'
  get '/magicball/magicball_answer'=> 'magicball#magicball_answer'
  get '/secretnumber'=>'secretnumber#secretnumber'
  get '/secretnumber/correctnumber'=>'secretnumber#correctnumber'
  get '/games/rock_paper_scissors'=>'games#rock_paper_scissors'
  get '/games/rock_paper_scissors/:throw' => 'games#rock_paper_scissors_play'

end
