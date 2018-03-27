Rails.application.routes.draw do
  root :to => 'pages#home'
  get '/games' => 'pages#games'
  get 'games/magic_8_ball' => 'games#magic_8_ball_answer'
  get 'games/secret_number' => 'games#secret_number_result'
  get 'games/scissors_paper_rock/:throw' => 'games#scissors_paper_rock_play'
end
