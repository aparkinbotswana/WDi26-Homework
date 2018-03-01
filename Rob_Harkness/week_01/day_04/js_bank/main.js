// js bank
const bank = {
  accounts: [],
  totalSum() {
    return this.accounts.reduce((total, account) => {
      return total + account.balance;
    }, 0);
  },
  addAccount(accountDetails) {
    this.accounts.push(accountDetails);
  },
  deposit(accountName, amount) {
    const depositAccount = this.accounts.find((account) => {
      return account.name === accountName;
    });
    depositAccount.balance += amount;
    return depositAccount;
  },
  withdraw(accountName, amount) {
    const withdrawAccount = this.accounts.find((account) => {
      return account.name === accountName;
    });
    if (withdrawAccount.balance > amount) {
      withdrawAccount.balance += amount;
      return withdrawAccount;
    } else {
      return 'insufficient funfds';
    }
  },
  listAccounts() {
    return this.accounts;
  },
  transfer(transferFrom, transferTo, amount) {
    const accountOne = this.accounts.find((account) => {
      return account.name === transferFrom;
    });
    const accountTwo = this.accounts.find((account) => {
      return account.name === transferTo;
    });
    if (accountOne.balance > amount) {
      accountOne.balance -= amount;
      accountTwo.balance += amount;
      return `${accountOne.name}:${accountOne.balance} ${accountTwo.name}:${
        accountTwo.balance
      }`;
    } else {
      return 'insufficient funfds';
    }
  }
};

bank.addAccount({ name: 'rob1', balance: 10000 });
bank.addAccount({ name: 'rob2', balance: 4585 });
bank.addAccount({ name: 'rob3', balance: 54 });
bank.addAccount({ name: 'rob4', balance: 68 });

console.log(bank.listAccounts());

console.log(bank.totalSum());

console.log(bank.deposit('rob1', 500));

console.log(bank.withdraw('rob1', 500));
console.log(bank.withdraw('rob1', 50000));

console.log(bank.transfer('rob1', 'rob2', 500));
