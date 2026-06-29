# 🏦 ParaBank Digital Banking QA Automation Suite

A complete QA Automation framework built with **Playwright** and **TypeScript** for a digital banking application.

This project demonstrates modern Quality Assurance practices, including **UI automation, API testing, SQL database validation, Page Object Model (POM)**, and reusable test utilities.

---

# 🚀 Technologies

- Playwright
- TypeScript
- Node.js
- SQL
- SQLite
- Git
- GitHub

---

# 📂 Project Structure

```text
├── database
│   ├── banking.db
│   ├── schema.sql
│   ├── seed.sql
│   └── setup.ts
│
├── pages
│   ├── LoginPage.ts
│   ├── AccountsOverviewPage.ts
│   ├── TransferFundsPage.ts
│   ├── BillPayPage.ts
│   ├── FindTransactionsPage.ts
│   ├── RequestLoanPage.ts
│   └── LogoutPage.ts
│
├── tests
│   ├── api
│   ├── database
│   ├── e2e
│   └── ui
│
├── utils
│   └── database.ts
│
└── playwright.config.ts
```

---

# ✅ Test Coverage

## UI Tests

- Login
- Accounts Overview
- Transfer Funds
- Bill Payment
- Find Transactions
- Request Loan
- Logout

---

## API Tests

- Retrieve Customer Accounts
- Retrieve Account Details
- Transfer Funds API *(requires authenticated session and is currently skipped)*

---

## Database Tests

- Verify all accounts exist
- Verify customer account information
- Verify transfer transaction exists

---

# 🏷 Test Tags

Run all Smoke tests

```bash
npx playwright test --grep "@smoke"
```

Run all API tests

```bash
npx playwright test --grep "@api"
```

Run all Database tests

```bash
npx playwright test --grep "@database"
```

Run all Regression tests

```bash
npx playwright test --grep "@regression"
```

---

# ▶ Running the Project

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

Run all tests

```bash
npx playwright test
```

Run a single test

```bash
npx playwright test tests/login.spec.ts
```

Open the HTML report

```bash
npx playwright show-report
```

---

# 📊 QA Practices Demonstrated

- Page Object Model (POM)
- UI Automation
- API Testing
- SQL Database Validation
- Test Tagging
- Reusable Utilities
- Dynamic Data Handling
- HTML Reporting
- Banking Workflow Validation

---

# ⚠ Notes

- ParaBank is a public demo application and may occasionally be unavailable or unstable.
- The Transfer API test is intentionally skipped because it requires an authenticated session.
- SQLite is used locally to demonstrate SQL validation techniques and is independent of the public ParaBank application.

---

# 👨‍💻 Author

**Constantinos Kyrri**

Thank you !!!