CREATE TABLE Customers (
    customer_id INTEGER PRIMARY KEY,
    customer_name TEXT NOT NULL
);

CREATE TABLE Accounts (
    account_id INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    balance REAL NOT NULL,
    account_type TEXT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customers(customer_id)
);

CREATE TABLE Transactions (
    transaction_id INTEGER PRIMARY KEY,
    account_id INTEGER NOT NULL,
    amount REAL NOT NULL,
    transaction_type TEXT NOT NULL,
    transaction_date TEXT NOT NULL,
    FOREIGN KEY (account_id) REFERENCES Accounts(account_id)
);