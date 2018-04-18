class DashboardController < ApplicationController

def info
  stations = [params[:start_line], params[:start_station], params[:finish_line], params[:finish_station]]

  render :json => stations
end


end


##################
private
def single_trip line, start_station, finish_station

  lines = {
    "N" => ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    "L" => ["8th", "6th", "Union Square", "3rd", "1st"],
    "6" => ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
  }

  current_line = lines[line]
  start_position = current_line.index(start_station)
  finish_position = current_line.index(finish_station)

  single_stations_list = current_line[start_position .. finish_position]
  return single_stations_list
end

def double_trip start_line, start_station, finish_line, finish_station

   double_stations_list = "#{single_trip start_line, start_station, "Union Square"}, change at
   #{single_trip finish_line, "Union Square", finish_station}"

end

def plan_trip
  if start_station === finish_station
    single_trip line, start_station, finish_station
  else
    double_trip start_line, start_station, finish_line, finish_station
  end
end
