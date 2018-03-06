// JavaScript Bank
// In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.
//
// Bank
// There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts. It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts. There is no need to create additional functions of the bank to delete accounts, etc.
//
// The bank has many accounts. Accounts should be objects that all share a set of common functionality.
//
// Accounts
// Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.
//
// There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values to help you see your code working.
//
// You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some accounts, show the total balance, make some deposits and withdrawals, show the new total balance.
//
// Tips
// Don't overthink this. Shorter code is probably the answer.

// const accountFactoy = function(b,n) {
//   return {
//     balance: b,
//     name: n
//   };
// };

const bank = [ //array of objects (accounts) that the bank has generated via the accountFactory function
  {
    amount: 12,
    name: "Colonel Sanders",
    deposit: function(amount) {
      this.balance = this.balance + amount;
    },
    withdraw: function(amount) {
      this.balance = this.balance - amount;
    }
  },
  {
    amount: 1000,
    name: "Max Power",
    deposit: function(amount) {
      this.balance = this.balance + amount;
    },
    withdraw: function(amount) {
      this.balance = this.balance - amount;
    }
  },
  {
    amount: 50000,
    name: "Clippity Clop",
    deposit: function(amount) {
      this.balance = this.balance + amount;
    },
    withdraw: function(amount) {
      this.balance = this.balance - amount;
    }
  }
];
//check it's working:
console.log(bank);

// const bankFeatures = { //bit confused about why the bank features need to be methods (functions) inside an object
//   sum: function() {
//     let sum = 0;
//     for (let i = 0; i < bankAccounts.length; i++) {
//       sum = sum + bankAccounts[i].balance;
//     } return sum;
//   },
//   addAccount: function(b, n) {
//     let newAccount = {
//       balance: b,
//       name: n
//     }
//     bankAccounts.push(newAccount);
//     return bankAccounts;
//   },
//   deposit: function(a, n) {
//     //need to use the name (n) to find the relevant account, then add the new amount (a) to the existing balance
//     const depositIndex = bankAccounts.indexOf() //trying to get the index in the array of the account that has the name given but I don't know how.
//     }
//
//   },
//   withdraw: function() {
//
//   }
// };
//
// console.log(bankFeatures.sum());
// bankFeatures.addAccount(50, "Mary Poppins");
// console.log(bankAccounts);

const showBalance = function() {
  for (var i = 0; i < bank.length; i++) {
    console.log(bank[i].name)
    console.log(bank[i].amount);
  }
}

const newAccount = function() {
  let name = prompt("enter a name");
  newAccount.name = name;
  newAccount.balance = 0;
  newAccount.deposit = function(amount)

  newAccount.withdraw = function(amount)
  bank.push(newAccount);
}

const deposit = function() {
  let name = prompt("enter a name");
  let amount = prompt("enter an amount");
  amount = +amount;
  console.log(name, amount); //check

  for (let i = 0; i < bank.length; i++) {
    if (bank[i].name === name) {
      bank[i].deposit(amount);
    }
  }

  showBalance();
}

const withdraw = function () {
  let name = prompt("enter a name");
  let amount = prompt("enter an amount");
  amount = +amount;

  for (var i = 0; i < bank.length; i++) {
    if (bank[i].name === name) {
      if (bank[i].balance < amount) {
        console.log("you don't have enough money");
      } else {
        bank[i].balance(amount);
      }
    }
  }
}

const transfer = function() {
  let name1 = prompt("enter a name to transfer FROM");
  let name2 = prompt("enter a name to transfer TO");
  let amount = prompt("enter an amount");
  amount = +amount;

  for (var i = 0; i < bank.length; i++) {
    if (bank[i].name === name1) {
      if (bank[i].balance < amount) {
        console.log("not enough money");
      } else {
        bank[i].balance = bank[i].balance - amount;
      }
    }
  }

  for (var i = 0; i < bank.length; i++) {
    if (bank[i].name === name2) {
      bank[i].balance = bank[i].balance + amount;
    }
  }

  showBalance();

}




console.log(bank);
