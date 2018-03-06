console.log(`working?`);

// planTrip('N', '34th', 'N', '8th');

//Input
// Starting at N line - 34st
// End at N Line - 8th

// Output
// travel on N line through (28th, 23rd, Union)
// 3 Stops


// Define the item in the array

//Start Line: sl, Start Stop, ss, End Line: el, End Stop: es

const stations = {
// Line as the key
  n: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  l: ["8th", "6th", "Union Square", "3rd", "1st"],
  6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

const planTrip = function (sl, ss, el, es) {
  console.log(sl, ss, el, es);

      // >> find the distance between stops <<
      //Find the index number of the Starting Station (ss)

// LINE N //

      let line = "N";

      let start = stations.n.indexOf(ss)
        console.log(start);

        //Find the index number of the Ending Stations(es)
      let end = stations.n.indexOf(es)
        console.log(end);

      // Using ss and es calculate the difference/length between the two stops (if on same line)
      let numberOfStops = (end - start);
        console.log(numberOfStops);

      // If travling foward on the line
      if (numberOfStops > 0) {
        // console.log(`it will take you ${numberOfStops} stops to reach your destination`);
        // if traveling backward on the line
      }else {
        let numberOfStops = (start - end);
        // console.log(`it will take you ${numberOfStops} stops to reach your destination`);
      };

  // >> name the stops that you are passing through

      // If travling foward on the line
      if (numberOfStops > 0) {
        let passStops = stations.n.slice((start), end-1);
        // console.log(passStops);
        console.log(`On the ${line} line it will take you ${numberOfStops} stops, you will pass through the stops of: ${passStops} `);

      // if traveling backward on the line - the stop number are in reverse order (order that you will pass them in)
      }else {
        let reverseN = stations.n.reverse();
        let passStops = stations.n.slice(end, start-1);
        let numberOfStops = Math.abs(end-start);
        // console.log(passStops);
        console.log(`On the ${line} line it will take you ${numberOfStops} stops, you will pass through the stops of: ${passStops} `);
      };



};

planTrip("N", "34th", "N", "Union Square");
