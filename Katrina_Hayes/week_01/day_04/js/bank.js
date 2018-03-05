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

const bankAccounts = [ //array of accounts that the bank has
  {
    current balance: 12,
    owner: Joe Blow
  },
  {},
  {},
];

const bankFunctions = { //object of bank functions where i put the methods, but I'm confused about why the methods would go in this object, I'm just doing it because if they're called methods, they must be in an object
  sum: function(a) {
    let sum = 0;
    for (let i = 0; i < bankAccounts.length; i++) {
      sum = sum + bankAccounts[i];
    } return sum;
  },
  addAccount: function(b) { //I'm getting very lost and it's very late so I'm stopping here for now.
    b.push
  }
}
