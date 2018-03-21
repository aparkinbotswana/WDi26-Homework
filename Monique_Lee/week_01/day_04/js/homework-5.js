// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input
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

const cashRegister = function(obj){
    let prices = Object.values(obj);
    let total = 0;
    for(let i = 0; i < prices.length; i++){
        total += +prices[i];  
    }
    return total;
}

let registerval = cashRegister(cartForParty);
console.log(registerval);


/* ME: 1st attempt - did not work - trying to use forEach 

const dollars = function(obj){
    Object.keys(obj).forEach(function(key){
      obj[key] = +obj[key]
    });
    return obj;
};

const cashRegister = function(obj){
    total = 0
    prices = dollars();
    for (let i; i < prices.length; i++){
      total = total + prices[i];
      return total;
    }
}
*/


/*
//ME: 2nd attempt - did not work - is returning undefined

const cashRegister = function(obj){
    total = 0
    for (let i; i < obj.length; i++){
      total += Object.keys(obj).forEach(function(key){
            obj[key] = +obj[key]
          });
      return total;
    }
}

*/

//ME: 3rd attempt
//Object.values(obj) returns the values in an array (as string items)


//JOEL: for in loop: not recommended!!! recommend to turn object into list instead
/*
let total = 0;
for (let item in (cartForParty)){
  total = total + parseFloat(cartForParty[i]);
  // total = total + +(cartForParty[i]);
}
*/

//JOEL - this one is a winner!


/*
const prices = Object.values(cartForParty);
  let total = 0;
  for (let i; i < prices.length, i++){
    total += +prices[i];
  }
*/
