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

const bank = {
  accounts: [
  {
    name: "Katrina",
    balance: 20
  },
  {
    name: "Dan",
    balance: 10
  }
  ],

  totalSum: function() {
    let total = 0;
    for (var i = 0; i < this.accounts.length; i++) {
      total = total + this.accounts[i].balance;
    }
    return total;
  },

  addAccount: function() {
    let newName = prompt('enter name for new account to be created');
    let startingAmount = prompt('enter an amount for new account to be created');
    startingAmount = parseInt(startingAmount);
    this.accounts.push({name: newName, balance: startingAmount});
  },

  deposit: function() {
    let name = prompt("You'd like to make a deposit? Enter the account name");
    let amount = prompt('enter an amount for the deposit');
    amount = parseInt(amount);

    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].name === name) {
        this.accounts[i].balance = this.accounts[i].balance + amount;
      }
    }
  },

  withdraw: function() {
    let name = prompt("You'd like to make a withdrawl? Enter the account name");
    let amount = prompt('enter an amount for the withdrawal');
    amount = parseInt(amount);

    for (var i = 0; i < this.accounts.length; i++) {
      if (this.accounts[i].name === name) {
        if (this.accounts[i].balance >= amount) {
          this.accounts[i].balance = this.accounts[i].balance - amount;
        } else {
          return;
        }
      }
    }
  },

  showAccountDetails: function() {
    for (var i = 0; i < this.accounts.length; i++) {
      let name = this.accounts[i].name;
      let balance = this.accounts[i].balance;
      console.log(`${name}, ${balance}`);
    }
  }
};

//..........TESTING THE BANK FUNCTIONALITY............//

console.log(`These are the current accounts:`);
console.log(bank.showAccountDetails());
console.log(`We can sum the total of all accounts.`);
console.log(`Sum is ${bank.totalSum()}`);
console.log(`We can add an account.`);
console.log(bank.addAccount());
console.log(`Here are the accounts again:`); console.log(bank.showAccountDetails());
console.log(`We can deposit $30 into the first account`);
console.log(bank.deposit());
console.log(`Here are the accounts - see updated amount in first account:`);
console.log(bank.showAccountDetails());
console.log(`We can withdraw that same amount`);
console.log(bank.withdraw());
console.log(`Here are the acccounts:`);
console.log(bank.showAccountDetails());
console.log(`if there's not enough money, the withdrawl won't work.`);
console.log(`Trying to take 50 from first account`);
console.log(bank.withdraw());
console.log(`but was rejected so amount should stay the same - look at first account`);
console.log(bank.showAccountDetails());
