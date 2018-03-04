//The Cash Register

//Write a function called cashRegister that takes a shopping cart object.
//The object contains item names and prices (itemName: itemPrice).
//The function should return the total price of the shopping cart.

const shoppingTrolley = {
  Banana:"0.40",
  CanOfSoup: "2.00",
  Sandwich: "4.99",
  WholeChicken: "12.50"
};

const cashRegister = function(){
  let total = 0
  for (let item in shoppingTrolley){
    total = total + +shoppingTrolley[item];
  }
  console.log(total);
}
cashRegister();
