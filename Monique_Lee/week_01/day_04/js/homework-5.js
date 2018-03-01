// The Cash Register
// Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
//
// // Input

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const dollars = function(obj){
    Object.keys(obj).forEach(function(key){
      obj[key] = +obj[key]
    });
    return obj;
};

const cashRegister = function(obj){
    total = 0
    prices = dollars();
    for (let i; i < prices.length, i++){
      total = total + prices[i];
      return total;
    }
}

// // Output
// cashRegister(cartForParty)); // 60.55

cashRegister(cartForParty);


/* check:
        function sum(obj) {
          var sum = 0;
          for(var el in obj) {
            if( obj.hasOwnProperty( el ) ) {
              sum += parseInt( obj[el] );
            }
          }
          return sum;
        }
      }
*/
