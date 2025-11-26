function createCounter() {
  let count = 0; 
  return {
    increment: function () {
      count++;
      console.log("Current count:", count);
    },
    decrement: function () {
      count--;
      console.log("Current count:", count);
    }
  };
}
const counter = createCounter();
counter.increment(); 
counter.increment(); 
counter.decrement(); 
function createBankAccount() {
  let balance = 0;
  let history = []; // stored using closure

  return {
    deposit(amount) {
      balance += amount;
      history.push(`Deposited: ${amount}`);
      console.log(`Deposited: ${amount}`);
    },
    withdraw(amount) {
      if (amount <= balance) {
        balance -= amount;
        history.push(`Withdrawn: ${amount}`);
        console.log(`Withdrawn: ${amount}`);
      } else {
        history.push("Failed withdrawal attempt");
        console.log("Insufficient balance");
      }
    },
    checkBalance() {
      console.log(`Current Balance: ${balance}`);
    },
    getHistory() {
      console.log("Transaction History:", history);
    }
  };
}

