
const lineOne = ['Times','34', '28', 'Union', '8']; //Line N
const lineTwo = ['8', '6', 'Union', '3', '1']; // Line L
const lineThree = ['Grand', '33', '28', '23', 'Union', 'Astor']; //Line 6
let onLineStops= [];
let offLineStops = [];
let sameLineStops=[];

let iGlobal = []; //onArray
let kGlobal = []; //offArray
let lGlobal = []; //unionArrayOn
let mGlobal = []; //unionArrayOff

let hopOnGlobal = [];
let hopOffGlobal = [];
let onLineGlobal = [];
let offLineGlobal = [];

const findOn = function (){
  let i = 0;
  while (i<6){
    if (hopOnGlobal[0] === onLineGlobal[i]){
      iGlobal = i;
    };
    i++;
  };
};
const findOff = function (){
  let k = 0
  while (k<6){
    if (hopOffGlobal[0] === offLineGlobal[k]){
      kGlobal = k;
    };
    k++
  };
};
const findUnionThis = function (){
  let l = 0
  while (l<6){
    if ('Union' === onLineGlobal[l]){
      lGlobal = l;
    };
    l++;
  };
};
const findUnionNotThis = function (){
  let m = 0
  while (m<6){
    if ('Union' === offLineGlobal[m]){
      mGlobal = m;
    };
    m++;
  };
};
const findStopsSameLine = function (){
  let t=iGlobal
  if (t < kGlobal){ //If stop is down the line
    while (t<kGlobal){
      if (t === kGlobal){
      }
      t++;
      sameLineStops.push(onLineGlobal[t])
      }
    }
  else{ //If stop is up the line
    while (kGlobal<t){
      if (kGlobal === t){
      }
      sameLineStops.unshift(onLineGlobal[kGlobal]);
      kGlobal++;
    };
  };
};

const findStopsToUnion = function (){ ///l = union location
  let t = iGlobal //iGlobal = start station
  if (t < lGlobal){ //If stop is down the line
    while (t < lGlobal){
      if (t === lGlobal){
      }
      t++;
      onLineStops.push(onLineGlobal[t])
      }
    }
  else{ //If stop is up the line
    while (lGlobal < t){
      if (lGlobal === t){
      onLineStops.unshift(onLineGlobal[lGlobal]) //add final stop
      }
      onLineStops.unshift(onLineGlobal[lGlobal])
      lGlobal++;
    };
  };
};
const findStopsFromUnion = function(){
  let t = mGlobal //mGlobal = 2nd line union location
  if (t < kGlobal){ //If stop is down the line
    while (t < kGlobal){ //kGlobal = final destination
      if (t === kGlobal){
      }
      offLineStops.push(offLineGlobal[t])
      t++;
    }
  }
  else{ //If stop is up the line
    while (kGlobal < t){
      if (kGlobal === t){
      offLineStops.unshift(offLineGlobal[kGlobal]) //adds final stop
      }
      offLineStops.unshift(offLineGlobal[kGlobal]);
      kGlobal++;
    };
  };
};

const planTrip = function(onLine,hopOn,offLine,hopOff){
  let start = onLine;
  let finish = offLine;
  hopOnGlobal.push(hopOn);
  hopOffGlobal.push(hopOff);
  if (onLine === "N"){
     onLineGlobal = lineOne;
  }
  if (onLine === "L"){
     onLineGlobal = lineTwo;
  }
  if (onLine ==="6") {
     onLineGlobal = lineThree;
  }
  if (offLine === "N") {
      offLineGlobal = lineOne;
  }
  if (offLine ==="L"){
    offLineGlobal = lineTwo;
  }
  if (offLine === "6"){
    offLineGlobal =lineThree;
  }
  if (onLine === offLine){
    findOn();
    findOff();
    findStopsSameLine();
    let finalStop = sameLineStops.slice(sameLineStops.length-1);
    let notFinalStop = sameLineStops.slice(0,sameLineStops.length-1);
    if (sameLineStops.length === 0){
      console.log(`You are already at your destination!`)
    }
    else if (sameLineStops.length >1){
      console.log(`You are travelling from ${hopOn} station, line ${start} travelling to ${hopOff} station on the ${(finish)} line. On the way you will stop at ${notFinalStop.join(", ")}, and finally ${hopOff} station!`)
    }
    else{
      console.log(`You are travelling from ${hopOn} station, line ${start} travelling to ${hopOff} station on the ${(finish)} line. On the way you will stop at your one and only destination, ${hopOff} station!`)
    }
  }
  if (onLine != offLine){
    findOn();
    findUnionThis();
    findStopsToUnion();
    findUnionNotThis();
    findOff();
    findStopsFromUnion();
    let notFinalOnLineStop = onLineStops.slice(0,onLineStops.length-1);
    let finalOffLineStop = offLineStops.slice(offLineStops.length-1);
    let notFinalOffLineStop = offLineStops.slice(0,offLineStops.length-1);
    if(onLineStops.length === 0 && offLineStops.length === 0){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. You are already at your destination! Just the wrong platform...`)
    }
    else if(onLineStops.length === 0 && offLineStops.length > 1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Change lines at Union station. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${hopOff} station!`)
    }
    else if(onLineStops.length === 0 && offLineStops.length === 1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Change lines at Union station. Your next stop is ${offLine} station!`)
    }
    else if(onLineStops.length > 1 && offLineStops.length === 0){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and finally Union Station! Now you just have to change platform...`);
    }
    else if(onLineStops.length === 1 && offLineStops.length === 0){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Your one and only stop is Union station! Then you just have to change platform...`);
    }
    else if(onLineStops.length ===1 && offLineStops.length ===1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Your next stop is Union Station. Here you will change train lines. Your next and final stop is ${hopOff}`);
    }
    else if(onLineStops.length >1 && offLineStops.length ===1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and change lines at Union Station. Your next and final stop is ${hopOff}`)
    }
    else if(onLineStops.length===1 && offLineStops.length>1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${hopOff} station!`)
    }
    else{
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and change lines at Union Station. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${hopOff} station!`);
    }
  }
};
