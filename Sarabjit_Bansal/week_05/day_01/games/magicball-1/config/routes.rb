Rails.application.routes.draw do

  root :to =>'pages#home'
  get '/home' =>'pages#home'
  get '/magicball' => 'magicball#form'
  get '/magicball/lookup' =>'magicball#lookup'
  get '/secretno' => 'secretno#form'
  get '/secretno/lookup' =>'secretno#lookup'
  get '/rockpaper' => 'rockpaper#form'
  get '/rockpaper/lookup' =>'rockpaper#lookup'
end
