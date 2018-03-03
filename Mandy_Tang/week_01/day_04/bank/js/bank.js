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
