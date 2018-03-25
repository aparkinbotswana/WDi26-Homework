require 'sinatra'
require 'sinatra/reloader'
require 'httparty'
require 'pry'


get '/' do
  erb :home # find the :home erb = a HTML file with Embedded Ruby.
end

get '/test' do
erb :test
end

get '/no_test' do
erb :no_test
end

get '/refactor' do
erb :refactor
end

get '/refactor_needed' do
erb :refactor_needed
end

get '/refactor_not_needed' do
erb :refactor_not_needed
end

get '/home' do
erb :home
end
