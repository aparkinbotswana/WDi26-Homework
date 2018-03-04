// ## Part 1, Rectangle
// Given the following a rectangle object like the one below, write the following functions:
//
// isSquare - Returns whether the rectangle is a square or not
// area - Returns the area of the rectangle
// perimeter - Returns the perimeter of the rectangle
// const rectangleA = {
//   length: 4,
//   width: 4
// };

const isSquare = function(square) {
  const { length, width } = square;

  if (length === width) {
    return true;
  } else {
    return false;
  }
};

const areaOfSquare = function(square) {
  const { length, width } = square;

  return `The area of this square is ${length * width}`;
};

const perimeterOfSquare = function(square) {
  const { length, width } = square;
  return `The perimeter of this square is ${length * 2 + width * 2}`;
};

// ## Part 2, Triangle
// Given the following a triangle object like the one below, write the following functions:
//
// isEquilateral - Returns whether the triangle is equilateral or not
// isIsosceles - Returns whether the triangle is isosceles or not
// area - Returns the area of the Triangle
// isObtuse - Returns whether the triangle is obtuse or not
// const triangleA = {
//   sideA: 3,
//   sideB: 4,
//   sideC: 4
// };

const isEquilateral = function(triangle) {
  const { sideA, sideB, sideC } = triangle;
  return sideA === sideB && sideA === sideC;
};

const isIsosceles = function(triangle) {
  const { sideA, sideB, sideC } = triangle;

  return sideA === sideB || sideA === sideC || sideB === sideC;
};

const isObtuse = function(triangle) {
  const { sideA, sideB, sideC } = triangle;

  return (
    sideA * sideA + sideB * sideB < sideC * sideC ||
    sideA * sideA + sideC * sideC < sideB * sideB ||
    sideB * sideB + sideC * sideC < sideA * sideA
  );
};

// ## The Cash Register
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
//
// // Output
// cashRegister(cartForParty)); // 60.55

const cashRegister = function(cart) {
  const values = Object.values(cart);
  const amounts = values.map(amount => {
    return parseFloat(amount);
  });

  const sumOfAmounts = amounts.reduce(function(a, b) {
    return a + b;
  });

  return sumOfAmounts
};

// ## Credit Card Validation
// You're starting your own credit card business. You've come up with a new way to validate credit cards with a simple function called validateCreditCard that returns true or false.
//
// Here are the rules for a valid number:
//
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16
// The following credit card numbers are valid:
//
// 9999-9999-8888-0000
// 6666-6666-6666-1666
// The following credit card numbers are invalid:
//
// a923-3211-9c01-1112 invalid characters
// 4444-4444-4444-4444 only one type of number
// 1111-1111-1111-1110 sum less than 16
// 6666-6666-6666-6661 odd final number
// Example
// validateCreditCard('9999-9999-8888-0000'); // Returns: true
// Hint: Remove the dashed from the input string before checking if the input credit card number is valid.
//
// Bonus: Return an object indicating whether the credit card is valid, and if not, what the error is
//
// { valid: true, number: 'a923-3211-9c01-1112' }
// { valid: false, number: 'a923-3211-9c01-1112', error: ‘wrong_length’ }
// Double Bonus: Make your credit card scheme even more advanced! What are the rules, and what are some numbers that pass or fail? Ideas: check expiration date! Check out the Luhn Algorithm for inspiration.

const validateCreditCard = function(cardNum) {
  const cardNumWithoutDash = cardNum.replace(/-|\s/g, "");
  const cardNumToStringArray = cardNumWithoutDash.split("");

  const numOnlyRegex = new RegExp("^[0-9]+$");
  const lastDigit = cardNumWithoutDash.substr(1, -1);
  const isEvenDigit = parseFloat(lastDigit) % 2 === 0 ? true : false;


  let result = {
    valid: true,
    number: cardNumWithoutDash,
    error: ""
  };
  let error = "";

  const digits = cardNumToStringArray.map(num => {
    return parseFloat(num);
  });

  const total = digits.reduce(function(a, b) {
    return a + b;
  });

  if (!numOnlyRegex.test(cardNumWithoutDash)) {
    error = "Invalid characters";
    result = {
      valid: numOnlyRegex.test(cardNumWithoutDash),
      number: cardNumWithoutDash,
      error
    };
    console.log(error);
    return result;
  }

  if (cardNumToStringArray.slice(0, 7).join("") === cardNumToStringArray.slice(8, 15).join('')) {
    error = `Only one type of number!`;
    result = {
      valid: !cardNumToStringArray.slice(0, 7) === cardNumToStringArray.slice(8, 15),
      number: cardNumWithoutDash,
      error
    };
    console.log(error);
    return result;
  }

  if (total < 16) {
    error = `Sum less than 16!`;
    result = {
      valid: total < 16,
      number: cardNumWithoutDash,
      error
    };
    console.log(error);
    return result;
  }
  return result;
};

// ## JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts
// and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method
// that will return the total sum of money in the accounts. It also needs an addAccount
// method that will enroll a new account at the bank and add it to the array of accounts.
// There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common
// functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or
// withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values --
// you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that
// the methods do indeed work as expected: add some accounts, show the total balance, make
// some deposits and withdrawals, show the new total balance.



const bank = [
  {
    owner: "Ryan",
    balance: 9999999999,
    transfer: function(name, amount) {
      for (let i = 0; i < bank.length; i++) {
        if (bank[i].owner === name) {
          bank[i].balance += amount;
        }
      }
      console.log(bank);
    },
    deposit: function(owner, amount, bank) {

      for (let i = 0; i < bank.length; i++) {
        if(bank[i].owner === owner) {
          bank[i].balance += amount;
        }
      }
    },
    withdraw: function(owner, amount, bank) {
      for (let i = 0; i < bank.length; i++) {
        if(bank[i].owner === owner) {
          if(bank[i].balance > amount) {
            bank[i].balance += amount;
          } else {
            console.log(`You don't have enough money!`);
          }
        }
      }
    }
  },
  {
    owner: "John",
    balance: 111,
    transfer: function(name, amount) {
      for (let i = 0; i < bank.length; i++) {
        if (bank[i].owner === name) {
          bank[i].balance += amount;
        }
      }
      console.log(bank);
    },
    deposit: function(owner, amount, bank) {

      for (let i = 0; i < bank.length; i++) {
        if(bank[i].owner === owner) {
          bank[i].balance += amount;
        }
      }
    },
    withdraw: function(owner, amount, bank) {
      for (let i = 0; i < bank.length; i++) {
        if(bank[i].owner === owner) {
          if(bank[i].balance > amount) {
            bank[i].balance += amount;
          } else {
            console.log(`You don't have enough money!`);
          }
        }
      }
    }
  },
  {
    owner: "Mary",
    balance: 222,
    transfer: function(name, amount) {
      for (let i = 0; i < bank.length; i++) {
        if (bank[i].owner === name) {
          bank[i].balance += amount;
        }
      }
      console.log(bank);
    },
    deposit: function(owner, amount, bank) {
      for (let i = 0; i < bank.length; i++) {
        if(bank[i].owner === owner) {
          bank[i].balance += amount;
        }
      }
    },
    withdraw: function(owner, amount, bank) {
      for (let i = 0; i < bank.length; i++) {
        if(bank[i].owner === owner) {
          if(bank[i].balance > amount) {
            bank[i].balance += amount;
          } else {
            console.log(`You don't have enough money!`);
          }
        }
      }
    }
  }
];

const addAccount = function(owner, balance) {
  const account = { owner, balance };
  bank.push(account);
  return bank;
};

const transferMoney = function(owner, name, amount, bank) {
  for (let i = 0; i < bank.length; i++) {
    if (bank[i].owner === owner) {
      if (bank[i].balance > amount) {
        bank[i].transfer(name, amount);
        bank[i].balance -= amount;
      } else {
        console.log(`Insufficient fund, transfer failed!`);
      }
    }
  }
};

const makeDeposit = function(owner, amount, bank) {
  for (let i = 0; i < bank.length; i++) {
    if (bank[i].owner === owner) {
      bank[i].deposit(owner, amount, bank);
    }

  }
}

const makeWithdraw = function(owner, amount, bank) {
  for (let i = 0; i < bank.length; i++) {
    if (bank[i].ower === owner) {
      bank[i].withdraw(owner, amount, bank);
    }

  }
}

const totalSum = function(bank) {
  const balances = bank.map(acct => {
    return acct.balance;
  });

  const total = balances.reduce(function(a, b) {
    return a + b;
  });

  return total;
};

//
// Tips
// Don't overthink this. Shorter code is probably the answer.
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
