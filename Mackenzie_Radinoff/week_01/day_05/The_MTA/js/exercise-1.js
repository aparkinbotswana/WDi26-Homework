const lineOne = ['Times', '34', '28', 'Union', '8']; //Line N
const lineTwo = ['8', '6', 'Union', '3', '1']; // Line L
const lineThree = ['Grand', '33', '28', '23', 'Union', 'Astor']; //Line 6
let onLineStops = [];
let offLineStops = [];
let sameLineStops = [];


let iGlobal = []; //onArray
let kGlobal = []; //offArray
let lGlobal = []; //unionArrayOn
let mGlobal = []; //unionArrayOff

let hopOnGlobal = []; //hopOn Argument
let hopOffGlobal = []; //hopOff Argument
let onLineGlobal = []; //onLine Argument
let offLineGlobal = []; //offLine Argument

const findOn = function() { //This function finds where our starting station is
    let i = 0;
    while (i < 6) {
        if (hopOnGlobal[0] === onLineGlobal[i]) {
            iGlobal = i;
        }
        i++;
    }
};
const findOff = function() {  //This function finds where our final station is
    let k = 0;
    while (k < 6) {
        if (hopOffGlobal[0] === offLineGlobal[k]) {
            kGlobal = k;
        }
        k++;
    }
};
const findUnionThis = function() { //This funtion finds Union on our starting line
    let l = 0;
    while (l < 6) {
        if ('Union' === onLineGlobal[l]) {
            lGlobal = l;
        }
        l++;
    }
};
const findUnionNotThis = function() { //This function finds Union on our end line
    let m = 0;
    while (m < 6) {
        if ('Union' === offLineGlobal[m]) {
            mGlobal = m;
        }
        m++;
    }
};
const findStopsSameLine = function() { //This function finds all stops if we are not changing lines on our journey
    let t = iGlobal; //iGlobal = start station
    if (t < kGlobal) { //If stop is down the line
        while (t < kGlobal) {
            if (t === kGlobal) {}
            t++;
            sameLineStops.push(onLineGlobal[t]);
        }
    } else { //If stop is up the line
        while (kGlobal < t) {
            if (kGlobal === t) {}
            sameLineStops.unshift(onLineGlobal[kGlobal]);
            kGlobal++;
        }
    }
};
const findStopsToUnion = function() { //This function finds all stops on our way to Union
    let t = iGlobal; //iGlobal = start station
    if (t < lGlobal) { //If stop is down the line
        while (t < lGlobal) {
            if (t === lGlobal) {}
            t++;
            onLineStops.push(onLineGlobal[t]);
        }
    } else { //If stop is up the line
        while (lGlobal < t) {
            if (lGlobal === t) {
                onLineStops.unshift(onLineGlobal[lGlobal]); //add final stop
            }
            onLineStops.unshift(onLineGlobal[lGlobal]);
            lGlobal++;
        }
    }
};
const findStopsFromUnion = function() { //This function finds all stops on our way from Union
    let t = mGlobal; //mGlobal = 2nd line union location
    if (t < kGlobal) { //If stop is down the line
        while (t < kGlobal) { //kGlobal = final destination
            if (t === kGlobal) {}
            offLineStops.push(offLineGlobal[t]);
            t++;
        }
    } else { //If stop is up the line
        while (kGlobal < t) {
            if (kGlobal === t) {
                offLineStops.unshift(offLineGlobal[kGlobal]); //adds final stop
            }
            offLineStops.unshift(offLineGlobal[kGlobal]);
            kGlobal++;
        }
    }
};
const planTrip = function(onLine, hopOn, offLine, hopOff) {
    hopOnGlobal.push(hopOn); //This code up to (onLine === offLine)is to make our arguments Global
    hopOffGlobal.push(hopOff);
    if (onLine === "N") {
        onLineGlobal = lineOne;
    }
    if (onLine === "L") {
        onLineGlobal = lineTwo;
    }
    if (onLine === "6") {
        onLineGlobal = lineThree;
    }
    if (offLine === "N") {
        offLineGlobal = lineOne;
    }
    if (offLine === "L") {
        offLineGlobal = lineTwo;
    }
    if (offLine === "6") {
        offLineGlobal = lineThree;
    }
    if (onLine === offLine) { //If our whole trip is on the same line
        findOn();
        findOff();
        findStopsSameLine();
        let finalStop = sameLineStops.slice(sameLineStops.length - 1);
        let notFinalStop = sameLineStops.slice(0, sameLineStops.length - 1);
        if (sameLineStops.length === 0) {
            console.log(`You are already at your destination!`);
        } else if (sameLineStops.length > 1) {
            console.log(`You are travelling from ${hopOn} station, line ${onLine} travelling to ${hopOff} station on the ${offLine} line. On the way you will stop at ${notFinalStop.join(", ")}, and finally ${hopOff} station!`);
        } else {
            console.log(`You are travelling from ${hopOn} station, line ${onLine} travelling to ${hopOff} station on the ${offLine} line. On the way you will stop at your one and only destination, ${hopOff} station!`);
        }
    }
    if (onLine != offLine) { //If our strip is over multiples lines
        findOn();
        findUnionThis();
        findStopsToUnion();
        findUnionNotThis();
        findOff();
        findStopsFromUnion();
        let notFinalOnLineStop = onLineStops.slice(0, onLineStops.length - 1);
        let notFinalOffLineStop = offLineStops.slice(0, offLineStops.length - 1);
        if (onLineStops.length === 0 && offLineStops.length === 0) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. You are already at your destination! Just the wrong platform...`);
        } else if (onLineStops.length === 0 && offLineStops.length > 1) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. Change lines at Union station. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${hopOff} station!`);
        } else if (onLineStops.length === 0 && offLineStops.length === 1) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. Change lines at Union station. Your next stop is ${offLine} station!`);
        } else if (onLineStops.length > 1 && offLineStops.length === 0) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and finally Union Station! Now you just have to change platform...`);
        } else if (onLineStops.length === 1 && offLineStops.length === 0) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. Your one and only stop is Union station! Then you just have to change platform...`);
        } else if (onLineStops.length === 1 && offLineStops.length === 1) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. Your next stop is Union Station. Here you will change train lines. Your next and final stop is ${hopOff}`);
        } else if (onLineStops.length > 1 && offLineStops.length === 1) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and change lines at Union Station. Your next and final stop is ${hopOff}`);
        } else if (onLineStops.length === 1 && offLineStops.length > 1) {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${hopOff} station!`);
        } else {
            console.log(`You are at ${hopOn} station, line ${onLine} travelling to ${hopOff} station, line ${offLine}. On the way you will stop at ${notFinalOnLineStop.join(", ")} and change lines at Union Station. On the way you will stop at ${notFinalOffLineStop.join(", ")} and finally ${hopOff} station!`);
        }
    }
};
