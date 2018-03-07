// // Create a new Javascript file and link to it with a script tag at the bottom.
// // Add an event listener to the button so that it calls a makeMadLib function when clicked.
// // In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and
// // output that in the story div (like "Pamela really likes pink cucumbers.")
//
// Start of code.
// let button = document.getElementById('lib-button');
// let makeMadLib = function (click) {
//  let noun = document.getElementById('noun').value;
//  let adjective = document.getElementById('adjective').value;
//  let name = document.getElementById('person').value;
// story.innerHTML = (name + " really likes " + adjective + " " + noun);
// };
// button.addEventListener('click', makeMadLib);


// Create a new Javascript file and link to it with a script tag at the bottom.
// For each operation, create an event listener for the button, and when it's clicked,
// find the value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button.

console.log("connected");

let square = +document.getElementById('square-input').value;

let squared = function () {
  let result =  Math.pow(square, 2);
  console.log(result);
  return result
};

// console.log(squared);

const button = document.getElementById('square-button')
button.addEventListener('click', squared)

// solution.innerHTML =
// buttonSquare.addEventListener('click', square);
// buttonHalf.addEventListener('click', half);
// buttonPercent.addEventListener('click', percent);
// buttonArea.addEventListener('click', area);
