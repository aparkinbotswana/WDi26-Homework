console.log('here again testing');
// The Cash Register
// Write a function called cashRegister that takes a shopping cart object.

//The object contains item names and prices (itemName: itemPrice).

//The function should return the total price of the shopping cart.

// Example
// // Input
const cartForParty = {
  banana: "1.25",
  handkerchief: "0.99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function (input) {
  // create a variable to hold the values from the object passed into the function below using the Object.values method
  let cartValues = Object.values(input);
  // setting up variable to be used inside for loop to add the values to each other from the passed in object
  let valuesSum = 0;

  // for loop to iterate thru the values from the object passed into this function to get the total sum of the shopping cart
  for (i = 0; i < cartValues.length; i++) {
    // loop takes the variable valueSum and adds it to itself each iteration of the loop (which in this example is 6 times as there are 6 key values in the object). It also turns the values into decimal point numbers from strings using the parseFloat method

    // attempts at line of code below:
    // ** my original code before talking to Theo: let valuesSum = parseFloat(shoppingCartTotal[i]); **

    // valuesSum = valuesSum + parseFloat(cartValues[i]);

    // line below uses the += operator to simply add valueSum value to itself thru the loop - pointed out by Theo
    valuesSum += parseFloat(cartValues[i]);
  }
  return valuesSum;
};
// putting the restult stored in the return valuesSum variable into a global variable 'x' means i can then access this result anywhere else in the program

let x = cashRegister(cartForParty); // Output cashRegister(cartForParty)); // 60.55

//** checks data type below - I thought the original output was an array it turned out (using typeOf) to be a single number printed to console 6 times as per the loop conditons: **
// console.log(typeof valuesToNumbers);
