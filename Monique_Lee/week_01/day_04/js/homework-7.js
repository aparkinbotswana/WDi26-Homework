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
//
// Bonus
// Ensure that the accounts cannot have negative values.
// Write a 'transfer' on the bank that allows you to transfer amounts between two accounts.
// Additional
// Begin exploring the JavaScript Koans. Fork, clone and start trying them.

//code-along with John


const bank = {
  {name:"John",
  balance: 0,
  deposit: function(amount){
      this.balance = this.balance + amount;
    },
  withdraw: function(amount){
      this.balance = this.balance + amount;
    }
},
  {name:"Paul",
  balance: 0,
  deposit: function(amount){
      this.balance = this.balance + amount;
    },
  withdraw: function(amount){
      this.balance = this.balance + amount;
    }
},
  {name:"George",
  balance: 0,
  deposit: function(amount){
      this.balance = this.balance + amount;
    },
  withdraw: function(amount){
      this.balance = this.balance + amount;
    }
},
  {name:"Ringo",
  balance: 0,
  deposit: function(amount){
      this.balance = this.balance + amount;
    },
  withdraw: function(amount){
      this.balance = this.balance + amount;
    }
  }
}

const deposit = function(){
  let name = prompt("enter a name");
  let amount = prompt("enter an amount");
  amount += amount;
  console.log(name, amount);

for (var i = 0; i < bank.length; i++) {
  if(bank[i].name === name ){
    bank[i].deposit(amount);
    }
  }
  showBalance();
}

const withdraw = function() {
  let name = prompt("enter a name");
  let amount = prompt("enter an amount");
  amount += amount;

for (var i = 0; i < bank.length; i++) {
  if(bank[i].name === name ){
    if(bank[i].balance < amount){
      console.log("You don't have enough money");
    } else {
      bank[i].withdraw(amount);
      }
    }
  }
  showBalance();
}

const transfer = function() {
  let name1 = prompt("enter a name to transfer FROM");
  let name2 =  prompt("enter a name to transfer TO");
  let amount = prompt("Enter an amount");
  amount = +amount;

  for (var i = 0; i < bank.length; i++) {
    if(bank[i].name === name1 ){
      if(bank[i].balance < amount){
        console.log("You don't have enough money");
      } else {
        bank[i].balance = bank[i].balance - amount;
        }
      }
    }

    for (var i = 0; i < bank.length; i++) {
      if(bank[i].name === name2 ){
          bank[i].balance = bank[i].balance - amount;
          }
        }
        showBalance();
    }

    const newAccount = function() {
      let name = prompt("Enter a name");
      const newAccount = {};
      newAccount.name = name;
      newAccount.balance = 0;
      newAccount.deposit = function(amount){
        this.balance = this.balance + amount;
      }

      bank.push(newAccount);

    }


  const showBalance = function() {
    for (var i = 0; i < bank.length; i++) {
      console.log(bank[i].name, bank[i].balance);
    }
  }
