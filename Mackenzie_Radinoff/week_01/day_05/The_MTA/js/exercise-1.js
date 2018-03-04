
const lineOne = ['Times','34', '28', 'Union', '8']; //Line N
const lineTwo = ['8', '6', 'Union', '3', '1']; // Line L
const lineThree = ['Grand', '33', '28', '23', 'Union', 'Astor']; //Line 6
let onLineStops= [];
let offLineStops = [];
let sameLineStops=[];

let iGlobal = []; //onArray
let iiGlobal = []; //offArray
let iiiGlobal = []; //unionArrayOn
let iiiiGlobal = []; //unionArrayOff

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
  let ii = 0
  while (ii<6){
    if (hopOffGlobal[0] === offLineGlobal[ii]){
      iiGlobal = ii;
    };
    ii++
  };
};
const findUnionThis = function (){
  let iii = 0
  while (iii<6){
    if ('Union' === onLineGlobal[iii]){
      iiiGlobal = iii;
    };
    iii++;
  };
};
const findUnionNotThis = function (){
  let iiii = 0
  while (iiii<6){
    if ('Union' === offLineGlobal[iiii]){
      iiiiGlobal = iiii;
    };
    iiii++;
  };
};
const findStopsSameLine = function (){
  let t=iGlobal
  if (t < iiGlobal){ //If stop is down the line
    while (t<iiGlobal){
      if (t === iiGlobal){
      }
      t++;
      sameLineStops.push(onLineGlobal[t])
      }
    }
  else{ //If stop is up the line
    while (iiGlobal<t){
      if (iiGlobal === t){
      }
      sameLineStops.unshift(onLineGlobal[iiGlobal]);
      iiGlobal++;
    };
  };
};

const findStopsToUnion = function (){ ///iii = union location
  let t = iGlobal //iGlobal = start station
  if (t < iiiGlobal){ //If stop is down the line
    while (t < iiiGlobal){
      if (t === iiiGlobal){
      }
      t++;
      onLineStops.push(onLineGlobal[t])
      }
    }
  else{ //If stop is up the line
    while (iiiGlobal < t){
      if (iiiGlobal === t){
      onLineStops.unshift(onLineGlobal[iiiGlobal]) //add final stop
      }
      onLineStops.unshift(onLineGlobal[iiiGlobal])
      iiiGlobal++;
    };
  };
};
const findStopsFromUnion = function(){
  let t = iiiiGlobal //iiiiGlobal = 2nd line union location
  if (t < iiGlobal){ //If stop is down the line
    while (t < iiGlobal){ //iiGlobal = final destination
      if (t === iiGlobal){
      }
      offLineStops.push(offLineGlobal[t])
      t++;
    }
  }
  else{ //If stop is up the line
    while (iiGlobal < t){
      if (iiGlobal === t){
      offLineStops.unshift(offLineGlobal[iiGlobal]) //adds final stop
      }
      offLineStops.unshift(offLineGlobal[iiGlobal]);
      iiGlobal++;
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
      console.log(`You are travelling from ${hopOn} station, line ${start} travelling to ${hopOff} station on the ${(finish)} line. On the way you will stop at ${notFinalStop.join(", ")}, and finally ${finalStop} station!`)
    }
    else{
      console.log(`You are travelling from ${hopOn} station, line ${start} travelling to ${hopOff} station on the ${(finish)} line. On the way you will stop at your one and only destination, ${finalStop} station!`)
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
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Change lines at Union station. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${finalOffLineStop} station!`)
    }
    else if(onLineStops.length === 0 && offLineStops.length === 1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Change lines at Union station. Your next stop is ${finalOffLineStop} station!`)
    }
    else if(onLineStops.length > 1 && offLineStops.length === 0){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and finally Union Station! Now you just have to change platform...`);
    }
    else if(onLineStops.length === 1 && offLineStops.length === 0){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Your one and only stop is Union station! Then you just have to change platform...`);
    }
    else if(onLineStops.length ===1 && offLineStops.length ===1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. Your next stop is Union Station. Here you will change train lines. Your next and final stop is ${finalOffLineStop}`);
    }
    else if(onLineStops.length >1 && offLineStops.length ===1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and change lines at Union Station. Your next and final stop is ${finalOffLineStop}`)
    }
    else if(onLineStops.length===1 && offLineStops.length>1){
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${finalOffLineStop} station!`)
    }
    else{
      console.log(`You are at ${hopOn} station, line ${start} travelling to ${hopOff} station, line ${(finish)}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and change lines at Union Station. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${finalOffLineStop} station!`);
    }
  }
};
