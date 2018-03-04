// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// Input

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output
// cashRegister(cartForParty)); // 60.5

const cashRegister = function (cart) {
   const objectString = (Object.values(cart)); // convert the object values to an array
   const stringToNum = objectString.map(Number); // convert the string array to number
   const sum = stringToNum.reduce((total, amount) => total + amount); // sum the converted array
   return sum;
}



console.log(cashRegister(cartForParty));


// total = 0;
// for (let item in cartForParty){
//     console.log(cartForParty[item]);
// }
