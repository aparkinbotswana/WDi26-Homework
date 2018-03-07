console.log("connected");

const bank = [
  {name: "John",
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount
  },
  withdraw: function(amount) {
    this.balance = this.balance - amount}
  },

  {name: "Paul",
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount
  },
  withdraw: function(amount) {
    this.balance = this.balance - amount}
  },

  {name: "George",
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount
  },
  withdraw: function(amount) {
    this.balance = this.balance - amount}
  },

  {name: "Ringo",
  balance: 0,
  deposit: function(amount) {
    this.balance = this.balance + amount
  },
  withdraw: function(amount) {
    this.balance = this.balance - amount}
  }
]


const deposit = function () {
  let name = prompt("enter a name")
  let amount = prompt("enter an amount")
  amount = +amount
  // console.log(name, amount);

  for (var i = 0; i < bank.length; i++) {
    if (bank[i].name === name ) {
      bank[i].deposit(amount)
    }
  }

  showBalance()
}

const withdraw = function () {
  let name = prompt("enter a name")
  let amount = prompt("enter an amount")
  amount = +amount

  for (var i = 0; i < bank.length; i++) {
    if (bank[i].name === name) {
      if (bank[i].balance < amount) {
        console.log("you dont have enough money");
      } else {
        bank[i].withdraw(amount)
      }

    }
  }

  showBalance()
}


const transfer = function () {
  let name1 = prompt("enter a name to transfer FROM")
  let name2 = prompt("enter a name to transfer TO")
  let amount = prompt("Enter an amount")
  amount = +amount;

  for (var i = 0; i < bank.length; i++) {
    if (bank[i].name === name1 ) {
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

  showBalance()

}


const newAccount = function () {
  let name = prompt("Enter a name");
  const newAccount = {}
  newAccount.name = name;
  newAccount.balance = 0;
  newAccount.deposit = function(amount) {
    this.balance = this.balance + amount
  }
  newAccount.withdraw = function(amount) {
    this.balance = this.balance - amount
  }

  bank.push(newAccount)
}


const showBalance = function () {
  for (var i = 0; i < bank.length; i++) {
    console.log(bank[i].name, bank[i].balance);
  }
}
