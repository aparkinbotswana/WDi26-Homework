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


const shoppingCart = {
  shoes: 45.59,
  banana: 1.99,
  milo: 2.50,
  chocolateBar: 5.10,
  toiletPaper: 10.76,
}
console.log(shoppingCart);

const cashRegister = function(cart) {
  const totalCost = cart.shoes + cart.banana + cart.milo + cart.chocolateBar + cart.toiletPaper; //Object.values(cart)? Object.key(cart)
  // key = banana etc values = 45.59, 1.99
  return totalCost.toFixed(2);
}

console.log(cashRegister(shoppingCart));

/* ______

for (let item in cartForParty) {
  total = toal + +cartForParty[item]
}

total  = 0;
for(let i = 0; i <prices.length; i++) {
  total += +prices [i]
} */
