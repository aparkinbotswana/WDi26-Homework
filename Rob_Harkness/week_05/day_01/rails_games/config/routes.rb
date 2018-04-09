Rails.application.routes.draw do
  root to: 'games#games'
  get '/games' => 'games#games'

  get '/games/8ball' => 'games#eight_ball'

  get '/games/guess' => 'games#guess'

  get '/games/rps' => 'games#rps'
end
