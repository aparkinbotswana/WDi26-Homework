require 'sinatra'
require 'sinatra/reloader'
require 'pry'

get '/' do
  erb :home
end

get '/pass' do
  erb :pass
end

get '/refactor' do
  erb :refactor
end

get '/do_refactor' do
  erb :do_refactor
end

get '/write_test' do # when no is clicked on home
  erb :write_test
end

get '/write_code' do # when no is clicked on pass
  erb :write_code
end

get '/new_feature' do # when no is clicked on refactor
  erb :new_feature
end

get '/beck' do # when inspiration link is clicked
  erb :beck
end
