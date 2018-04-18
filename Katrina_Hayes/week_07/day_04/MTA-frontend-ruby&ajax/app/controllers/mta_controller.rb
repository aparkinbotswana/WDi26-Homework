class MtaController < ApplicationController

  def populate_stations
    current_line = params[:current_line]
    $train_lines = {
      "N" => ["Times Square", "34th", "28th on the N", "23rd on the N", "Union Square on the N", "8th on the N"],
      "L" => ["8th on the L", "6th", "Union Square on the L", "3rd", "1st"],
      "6" => ["Grand Central", "33rd", "28th on the 6", "23rd on the 6", "Union Square on the 6", "Astor Place"]
    }
    stations_list = $train_lines[current_line]
    render :json => stations_list
  end

  def trip_planner
    line1 = params[:line1]
    stationOn = params[:stationOn]
    line2 = params[:line2]
    stationOff = params[:stationOff]
    tripDetails = plan_trip(line1, stationOn, line2, stationOff)
    tripDetails = tripDetails.split('.')
    render :json => tripDetails
  end

  private
  def get_stops index1, index2, line
    if index1 < index2
      stops = $train_lines[line][index1+1..index2]
    else
      stops = $train_lines[line][index2..index1-1].reverse
    end
    return stops
  end

  def plan_trip  line1, on_at, line2, off_at

    ### Indices of stations on, off, switch_l1, switch_l2
    index_on_at = $train_lines[line1].index(on_at)
    index_off_at = $train_lines[line2].index(off_at)
    index_switch_l1 = $train_lines[line1].index("Union Square on the #{line1}")
    index_switch_l2 = $train_lines[line2].index("Union Square on the #{line2}")

    ### Give name to the station to get off at for first_leg & deal with single_line trips so they can be dealt with in 'first_leg'
    if line1 == line2
      index_switch_l1 = index_off_at
      single_line = true
    end

    ### Get num stops for single_line / first_leg
    num_stops_l1 = (index_on_at - index_switch_l1).abs

    ### Call get_stops function to get names of stops for first leg
    stops_l1 = get_stops index_on_at, index_switch_l1, line1

    ### Get num stops for second_leg
    num_stops_l2 = (index_switch_l2 - index_off_at).abs

    ### Get stop names for second_leg
    stops_l2 = get_stops index_switch_l2, index_off_at, line2

    ### Trip details messages
    if (single_line)
      trip_details = "Get on at #{on_at}. You must travel on the #{line1} line and your journey will include the following stops: #{stops_l1.join(', ')}. Get off at #{off_at}. The total number of stops is #{num_stops_l1}."
    else
      trip_details = "Get on at #{on_at}. You must travel on the #{line1} line and your journey will include the following stops: #{stops_l1.join(', ')}. Switch at Union Square to the #{line2} line. The next leg of your journey will include the following stops: #{stops_l2.join(', ')}. Get off at #{off_at}. The total number of stops is #{num_stops_l1 + num_stops_l2}."
    end
    trip_details
  end

end
