console.log("connected");

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
// const cartForParty = {
//   banana: "1.25",
//   handkerchief: ".99",
//   Tshirt: "25.01",
//   apple: "0.60",
//   nalgene: "10.34",
//   proteinShake: "22.36"
// };
//
// // Output
// cashRegister(cartForParty)); // 60.55


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};
const newArray = []; //will store prices once they've been converted to numbers

const cashRegister = function () {
  const valuesToArray = Object.values(cartForParty); //take the values out of the object and put them into an array
  // console.log(valuesToArray);
  //convert string values to number
    for (let i = 0; i < valuesToArray.length; i++) { //while i is less than the array length, loop through each value
      let newNumber = Number(valuesToArray[i]) //turn the strings to numbers
      newArray.push(newNumber); // push these numbers to a new array
      // console.log(newNumber);
      // console.log(newArray);


    }
  // console.log(valuesToArray);
  let sum = newArray.reduce( (prev, curr) => prev + curr ); // find sum of all numbers in new array
  console.log(`The total price for your shopping cart is $${ sum }.`); // tell customer the total price of their shopping cart


};

cashRegister();


// Joels way of getting prices to add together
// const prices = Object.values (cartForParty );
// total = 0;
// for (let i = 0; i < prices.Length; i++) {
//   total += prices[i];
// }
//

// for (let item in cartForParty) {
//   total = total + +cartForParty[item];
// }
