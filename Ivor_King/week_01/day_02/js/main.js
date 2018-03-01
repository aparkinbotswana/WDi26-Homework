function squareNumber(num1) {
  let newNum = num1 * num1;
  console.log(`The result of squaring ${num} is ${newNum}`);
}

function halfNumber(num2) {
  let newNum2 = num2 / 2;
  console.log(`Half of ${num2} is ${newNum2}`);
}

function percentOf(num3, num4) {
  let newNum3 = (num3 / num4) * 100;
  console.log(`${num3} is ${newNum3}% of ${num4}`);
}

function roundNumber(numx, scale) {
  if(!("" + numx).includes("e")) {
    return +(Math.round(numx + "e+" + scale)  + "e-" + scale);
  }
  else {
    var arr = ("" + numx).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
  }
  return +(Math.round(+arr[0] + "e" + sig + (+arr[1] + scale)) + "e-" + scale);
}

function areaOfCircle(radius) {
  let newNum4 = Math.PI * radius * radius;
  console.log(`The area for a circle with radius ${radius} is ${newNum4}`);
  console.log(`The area rounded to 2 decimal places is ${roundNumber(newNum4,2)}`);
}

function allOps(arg1) {
  let output1 = arg1 / 2;
  let output2 = Math.pow(output1,2);
  let output3 = Math.PI * (Math.pow(output2,2));
  let output4 = output3 / (Math.pow(output3,2)) * 100;
  console.log(`Final result is ${output4}%`);
}

function drEvil(amount) {
  if (amount === 1000000) {
    console.log("1,000,000 dollars (pinky)");
  }
  else {
    console.log(`${amount} dollars`);
  }
}

function MixUp(arg3, arg4) {
  let char1 = arg3.slice(0,2);
  let char2 = arg4.slice(0,2);
  let arg3new = arg3.substring(2);
  let arg4new = arg4.substring(2);
  console.log(char2 + arg3new + " " + char1 + arg4new);
}

function fixStart(arg2) {
  let firstChar = arg2.charAt(0);
  let tempString = new RegExp(firstChar,"g");
  let string2 = arg2.substring(1);
  let output5 = string2.replace(tempString, "*");
  console.log(firstChar + output5);
}


// Unfinished
function verbing(str1) {
  if (str1.length > 3) {
    if (str1.slice(1,3) === "beg") {
      console.log("bonus");
    }
  }
}


// This part calls the functions:

// squareNumber(4);
// halfNumber(5);
// percentOf(3,4);
// areaOfCircle(4);
// allOps(10);
// drEvil(1000000);
// fixStart("hello this string is ridiculous");
// MixUp("hello", "world");

verbing("beginning");
