/*Write a function called cashRegister that takes a shopping cart object.
The object contains item names and prices (itemName: itemPrice).
 The function should return the total price of the shopping cart.*/

 const shoppingCart = {
  handbag: "20.0",
  perfume: "40.60",
  jacket: "30.0",
  watch: "50.0",
  earrings: "10.50"
};
    {
      const total = 0;
    for (let items in shoppingCart ) {
      total  = total + shoppingCart[items];
    }
  }
cashRegister();


/*You're starting your own credit card business.
You've come up with a new way to validate credit cards with a simple function
called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number*/

const validator = function(cardNum) {
  console.log('cardNum');
  cardNum = cardNum.replace(/-/,"")
  console.log(cardNum);

  if(cardNum.length != 16){
    return false;
  }
  if(isNan(cardNum)){
    return false;
  }
  if(cardNum[15] % 2 !==0){
    return false;
  }
  const arr = cardNum.split('');
    let sum = 0;
    for (var i = 0; i <arr.length; i++) {
    sum = sum + arr[i];
    }
    if(sum < 17){
      return false;
    }
    return true;
};
