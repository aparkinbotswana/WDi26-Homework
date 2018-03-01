console.log('here again testing');

// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.

//The object contains item names and prices (itemName: itemPrice).

//The function should return the total price of the shopping cart.

// Example
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// // Output cashRegister(cartForParty)); // 60.55
const cashRegister = function (input) {
  // create a variable to hold the values from the object passed into the function below using the Object.values method
  let cartValues = Object.values(input);

  // setting up variable to be used inside for loop to add the values to each other from the passed in object
  let valuesSum = 0;
  // for loop to iterate thru the values from the object passed into this function to get the total sum of the shopping cart
  for (i = 0; i < cartValues.length; i++) {
    // ** my original code: let valuesSum = parseFloat(shoppingCartTotal[i]); **
    // this takes the variable valueSum and adds it to itself each iteration of the loop (which in this example is 6 times) thru the object length. It also turns the values into decimal point numbers from strings using the parseFloat method
    valuesSum = valuesSum + parseFloat(cartValues[i]);
  }
  return valuesSum;
};
console.log(cashRegister(cartForParty) );
//** checks data type bellow: **
// console.log(typeof valuesToNumbers);
