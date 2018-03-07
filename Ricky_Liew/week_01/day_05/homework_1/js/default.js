//console.log(`test: MTA`);

const stnFactory = function(ln, c, n, sn, i, ls){
  return{
    line: ln,      // N, L or 6
    code: c,       // string
    name: n,
    stopNo: sn,    // int
    intersect: i,  // [station(s)]
    lastStop: ls   // bool
  };
};

const stations = [
  stnFactory('N','N1','Time Square',1,'',false),
  stnFactory('N','N2','34th',2,'',false),
  stnFactory('N','N3','28th',3,'',false),
  stnFactory('N','N4','23rd',4,'',false),
  stnFactory('N','N5','Union Square',5,['L3','65'],false),
  stnFactory('N','N6','8th',6,'',true),
  stnFactory('L','L1','8th',1,'',false),
  stnFactory('L','L2','6th',2,'',false),
  stnFactory('L','L3','Union Square',3,['N5','65'],false),
  stnFactory('L','L4','3rd',4,'',false),
  stnFactory('L','L5','1st',5,'',true),
  stnFactory('6','61','Grand Central',1,'',false),
  stnFactory('6','62','33rd',2,'',false),
  stnFactory('6','63','28th',3,'',false),
  stnFactory('6','64','23rd',4,'',false),
  stnFactory('6','65','Union Square',5,['N5','L3'],false),
  stnFactory('6','66','Astor Place',6,'',true)
];

const findStnByCode = function(stnCode){
  for (var i = 0; i < stations.length; i++) {
    if(stations[i].code === stnCode){
      return(stations[i]);
    }
  }
}

const findStnByLineStop = function(stnLine, stnStop){
  for (var i = 0; i < stations.length; i++) {
    if(stations[i].line === stnLine && stations[i].stopNo === stnStop){
      return(stations[i]);
    }
  }
}

const findXferStation = function(stnLine){
  for (var i = 0; i < stations.length; i++) {
    if(stations[i].line === stnLine && stations[i].intersect){
      //console.log(stations[i].name);
      return(stations[i]);
    }
  }
}


// travel on the same line
const lineTravel = function(start, end){  // start and end are both station objects
  let n1 = start.stopNo;              // journey is an array
  let n2 = end.stopNo;
  if(n2>n1){                          // count up from n1
    for(n=n1+1; n<=n2; n++){
      let currStn = findStnByLineStop(start.line, n);  //currStn is a train station object
      trainJourney.push(currStn)
    }
    //console.log("trainJourney:");
    //console.log(trainJourney);
  }
  else if(n2<n1){                     // count down from n1
    for(n=n1-1; n>=n2; n--){
      let currStn = findStnByLineStop(start.line, n);  //currStn is a train station object
      trainJourney.push(currStn)
    }
  }
  else{                 // same station
  }
}

const plotJourney = function(src, dest){
  if(src.line === dest.line){
    lineTravel (src, dest);
  }
  else{
    let srcxfer = findXferStation(src.line);
    let destxfer = findXferStation(dest.line);
    lineTravel (src, srcxfer);
    lineTravel (destxfer, dest);
  }
}

const displayJourney = function(){
  console.log('       Code   Line  Name');
  console.log(`Start: [${trainJourney[0].code}]   ${trainJourney[0].line} -   ${trainJourney[0].name}`);
  for(n=1; n<=trainJourney.length-2; n++){
    console.log(`Stop${n}: [${trainJourney[n].code}]   ${trainJourney[n].line} -   ${trainJourney[n].name}`);
  }
  console.log(`End:   [${trainJourney[trainJourney.length-1].code}]   ${trainJourney[trainJourney.length-1].line} -   ${trainJourney[trainJourney.length-1].name}`);
  console.log(``);
  console.log(`Number of stops: ${trainJourney.length-1}`);
}


let source      = '66';
let destination = 'N2';


let trainJourney = [];
let startStation = findStnByCode(source);
trainJourney.push(startStation);
sourceStn = findStnByCode(source);
destStn   = findStnByCode(destination);


plotJourney (sourceStn, destStn);
displayJourney();
