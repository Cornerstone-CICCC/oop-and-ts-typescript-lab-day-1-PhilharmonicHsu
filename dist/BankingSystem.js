"use strict";
// 🏦 Create a banking system where users can create accounts, deposit, withdraw, and check their balance.
// 1. Implement a function `createAccount` that adds a new account to the `accounts` array. It should return a `BankAccount` object.
// 2. Implement a function `processTransaction` that allows deposits and withdrawals and stores them in the transactions array. It should return a string.
// 3. Implement a function `getBalance` that returns the balance of a given account number.
// 4. Implement a function `getTransactionHistory` that returns the list of transactions for an account.
// 5. Implement a function `checkActiveStatus` that returns the active status of an account number.
// 6. Implement a function `closeAccount` that removes an account from the array and returns a confirmation string.
var TransactionType;
(function (TransactionType) {
    TransactionType[TransactionType["Deposit"] = 0] = "Deposit";
    TransactionType[TransactionType["Withdraw"] = 1] = "Withdraw";
})(TransactionType || (TransactionType = {}));
const accounts = [];
function createAccount(accountNo, firstname, lastname, initialDeposit, isActive = true) {
    const newAccount = {
        accountNo,
        firstname,
        lastname,
        balance: initialDeposit,
        isActive,
        transactions: []
    };
    accounts.push(newAccount);
    return newAccount;
}
function processTransaction(accountNo, amount, transactionType) {
    const targetAccount = accounts.find((account) => account.accountNo === accountNo);
    if (targetAccount) {
        const transaction = {
            accountNo,
            amount,
            type: transactionType
        };
        targetAccount.transactions.push(transaction);
        const word = transactionType === TransactionType.Deposit
            ? 'deposited'
            : 'withdrawn';
        if (transactionType === TransactionType.Withdraw) {
            if (targetAccount.balance >= amount) {
                targetAccount.balance -= amount;
            }
            else {
                return "Insufficient funds for withdrawal";
            }
        }
        else {
            targetAccount.balance += amount;
        }
        return `${amount} ${word} into account number ${accountNo}`;
    }
    return "Undefinded Acount Number";
}
function getBalance(accountNo) {
    const targetAccount = accounts.find((account) => account.accountNo === accountNo);
    if (targetAccount) {
        return targetAccount.balance;
    }
    return "Undefinded Acount Number";
}
function getTransactionHistory(accountNo) {
    const targetAccount = accounts.find((account) => account.accountNo === accountNo);
    if (targetAccount) {
        return targetAccount.transactions;
    }
    return "Undefinded Acount Number";
}
function checkActiveStatus(accountNo) {
    const targetAccount = accounts.find((account) => account.accountNo === accountNo);
    if (targetAccount) {
        return targetAccount.isActive;
    }
    return "Undefinded Acount Number";
}
function closeAccount(accountNo) {
    const targetAccount = accounts.find((account) => account.accountNo === accountNo);
    if (targetAccount) {
        targetAccount.isActive = false;
        return `Account number ${accountNo} closed`;
    }
    return "Undefinded Acount Number";
}
// Test cases (students should add more)
console.log(createAccount(1, "John", "Smith", 100)); // { accountNo: 1, firstname: "John", lastname: "Smith", balance: 100, isActive: true, transactions: [] }
console.log(processTransaction(1, 50, TransactionType.Deposit)); // "50 deposited into account number 1"
console.log(processTransaction(1, 20, TransactionType.Withdraw)); // "20 withdrawn from account number 1"
console.log(processTransaction(1, 500, TransactionType.Withdraw)); // "Insufficient funds for withdrawal"
console.log(getBalance(1)); // 130
console.log(getTransactionHistory(1)); // [{ accountNo: 1, amount: 50, type: TransactionType.Deposit }, { accountNo: 1, amount: 20, type: TransactionType.Withdraw }]
console.log(checkActiveStatus(1)); // true
console.log(closeAccount(1)); // "Account number 1 closed"
