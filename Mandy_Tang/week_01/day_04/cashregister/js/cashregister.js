// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//

let cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

let cartValues = Object.values(cartForParty); // Use Object.values to retrieve just the values so we can add them up

 let cashRegister = function (cartValues) { // Creating a function that passes in each value and adds them up

  function sum(cartValues) { // Finding the sum of each element using a function that loops through the cartValues array, adding up all the values
      let total = 0;  // Creating a variable called a total to store the 'total' after each iteration
      for (let i = 0; i < cartValues.length; i++) {
      total += Number(cartValues[i]); // Number() will make whatever's inside it into a number (returns the numerical value). Note you can't use 'let' here
      // x += y is short for x = x + y, so total = total from the laste iteration + the 'next/relevant' number in the array
            }
            return total; // The return is here because if you include it inside the for loop, it will stop prematurely
          }
          console.log(sum(cartValues)); // Calling the function to sum the array, then logging it to console

 }
 cashRegister(cartValues);

// let cartArray = []; // Want to use .reduce which you can only do on an array, so converting object into array called cartArray
// for (let i = 0; i < cartForParty.length; i++) {
//     cartArray.push(cartForParty[i]);
// }
// // cartArray should contain the new array
//
// function getSum(total, num) {    // Summing all the elements in the array
//     return total + num;
// }
// function myFunction(item) {
//     document.getElementById("demo").innerHTML = cartArray.reduce(getSum);
// }

//
// let cashRegister = function (cartForParty) {
//   let total = 0;
//   for (let i = 0; i < cartForParty.length; i++) {
//     console.log(cartForParty);
// //   }
//
// cashRegister(cartForParty);
