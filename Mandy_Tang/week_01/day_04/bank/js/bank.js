
const bank = [      // this is an object
  { name: "John",
    balance: 0,
    deposit: function(amount) {
    this.balance = this.balance + amount
  },
    withdraw: function(amount) {
    this.balance = this.balance - amount}
    }
  },
    { name: "Paul",
    balance: 0,
    deposit: function(amount) {
    this.balance = this.balance + amount
  },
    withdraw: function(amount) {
    this.balance = this.balance - amount}
  },
    { name: "George",
    balance: 0,
    deposit: function(amount) {
    this.balance = this.balance + amount
  },
    withdraw: function(amount) {
    this.balance = this.balance - amount}
  }
]

const deposit = function (name, amount) {
  let name = prompt("enter a name")
  let amount = prompt("enter an amount")
  amount = +amount; //to turn text prompt into a number
  console.log(name, amount);
}

//To call the right function within the object, use a for loop

for (var i = 0; i < bank.length; i++) {
  if (bank[i].name === name) {     // Find the bank account belonging to the name in the function we're calling, then use the function to pass in the value of the amount
    bank[i].deposit(amount); // Note to see the amount deposited, need to call bank in console
  }
}
}
const showBalance = function () {
  for (var i = 0; i < bank.length; i++) {
    console.log(bank[i].name, bank[i].balance);
  }
}

/////////////////////////////////////
let bank = [
  { account: { ownerName: "John Doe",
    currentBalance: "500"
    }
  },
  { account: { ownerName: "Queen Elizabeth",
    currentBalance: "100000"},
    }

]

let addAccount = function (ownerName, currentBalance) {
  bank.push(ownerName, currentBalance)   // This doesn't work - pushes as two separate elements
}

addAccount("Albus Dumbledore","200");
