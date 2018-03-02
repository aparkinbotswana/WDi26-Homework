console.log("Homework day 4..")

/*Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
/ Input*/


const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

console.log(Object.keys(cartForParty));
const cartParty = function (cartForParty){
  let items = Object.keys(cartForParty);
  let sum = 0;
  for (var i = 0; i < items.length; i++) {
    let name = items[i];
    let price = cartForParty[name];
    sum += Number.parseFloat(price);
  } return sum;
}
console.log(cartForParty);
console.log(cartParty(cartForParty));









// Output
//cashRegister(cartForParty)); // 60.55
