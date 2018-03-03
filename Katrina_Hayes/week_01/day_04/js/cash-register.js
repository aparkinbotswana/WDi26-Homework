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

const cashRegister = function(c) {
  let prices = Object.values(c); //turn the object values into an array
  let total = 0
  for (let i = 0; i < prices.length; i++) {
    total = total + Number(prices[i]); // trying to convert strings to number
    //total = total + parseInt(prices[i]); //doesn't work // aka total += Number(prices[i];)
  } return total
}

console.log(cashRegister(cartForParty));



//joels demo:
// let total = 0;
// for (let i in cartForParty) {
//   total = total + +cartForParty[item];
// }
//
// for (let i in cartForParty) {
//   total = total + parseFloat(cartForParty[i]);
// }
