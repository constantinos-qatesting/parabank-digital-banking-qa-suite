INSERT INTO Customers (customer_id, customer_name)
VALUES
(12212, 'John Smith'),
(12213, 'Maria Christou');

INSERT INTO Accounts (account_id, customer_id, balance, account_type)
VALUES
(12345, 12212, 1000.00, 'CHECKING'),
(12346, 12212, 2500.00, 'SAVINGS'),
(12347, 12213, 750.00, 'CHECKING');

INSERT INTO Transactions (transaction_id, account_id, amount, transaction_type, transaction_date)
VALUES
(1, 12345, -50.00, 'TRANSFER', '2026-06-28'),
(2, 12345, -75.00, 'BILL_PAYMENT', '2026-06-28'),
(3, 12346, 500.00, 'DEPOSIT', '2026-06-28');