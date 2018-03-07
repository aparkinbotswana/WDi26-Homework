const planTrip = {
lineL:['8th', '6th',' Union Square', '3rd', '1st'],
lineN:['Times Square',' 34th', '28th', '23rd', 'Union Square', '8th'],
line6:['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
};

console.log(`you must travel through following stops on the L line: ${ planTrip.lineL } `);
console.log(` you must travel through following stops on the N line:${ planTrip.lineN } `);
console.log(`you must travel through following stops on the 6 line: ${ planTrip.line6 } `);

  const station = function(startLine,startStation,endingLine,endingStation){
  //   station.startLine = 'lineL';
  //   station.startStation = '8th';
  //   station.endingLine = 'lineL';
  //   station.endingStation = '1st';
   // };
//  for(let i = 0;  i < lineL.length; i++) {
//   console.log('lineL[i]');
// }
};
// //lineL.items.forEach(station('lineL', '8th', 'lineL', '1st'));
 station('lineL', '6th', 'lineL', '3rd');
//
//
// // Object.entries(obj).forEach(([key, value]) => {
// // console.log(`${key} ${value}`);
//
  for (let  i = 0; i < planTrip.lineL.length; i++) {
 const stops = stop[i];
console.log(`the stops are ${ stops }`);
// }
// };
// station('lineL','8th','line6','1st');
