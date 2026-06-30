# 🏦 ParaBank Digital Banking QA Suite

A comprehensive Playwright + TypeScript automation framework built for the ParaBank demo banking application.

This project demonstrates modern QA automation practices by combining **UI testing**, **API testing**, **database validation**, and **Continuous Integration (GitHub Actions)** into a single automation framework.

---

## 🚀 Technologies

- Playwright
- TypeScript
- Node.js
- SQLite
- GitHub Actions
- dotenv

---

## ✅ Features

### UI Automation
- Login
- Logout
- Accounts Overview
- Bill Payment
- Request Loan
- Transfer Funds
- Find Transactions

### API Testing
- Retrieve customer accounts
- Retrieve account details
- Transfer funds through API

### Database Testing
- Verify customer accounts
- Verify account balances
- Verify transfer transactions

### End-to-End Testing
- Perform UI transfer
- Validate transaction directly in SQLite database

### CI/CD
- GitHub Actions automatically:
  - Installs dependencies
  - Creates a fresh SQLite database
  - Executes Playwright tests
  - Reports the test results

---

## 📁 Project Structure

```
pages/
database/
tests/
 ├── api/
 ├── database/
 └── e2e/
utils/
.github/workflows/
```

---

## ▶️ Installation

Clone the repository

```bash
git clone https://github.com/constantinos-qatesting/parabank-digital-banking-qa-suite.git
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

Create the SQLite database

```bash
npx ts-node database/setup.ts
```

---

## ▶️ Running Tests

Run all tests

```bash
npx playwright test
```

Run Smoke tests

```bash
npx playwright test --grep "@smoke"
```

Run API tests

```bash
npx playwright test --grep "@api"
```

Run Database tests

```bash
npx playwright test --grep "@database"
```

Run Chromium only

```bash
npx playwright test --project=chromium
```

---

## 🔐 Environment Variables

Create a `.env` file in the project root.

Example:

```env
USERNAME=your_username
PASSWORD=your_password
```

The `.env` file is ignored by Git and should never contain real credentials.

---

## ⚙️ GitHub Actions

The project includes a GitHub Actions workflow that automatically:

- Installs dependencies
- Installs Playwright browsers
- Recreates the SQLite database
- Executes Playwright tests on every push

---

## 💡 Skills Demonstrated

- Page Object Model (POM)
- UI Automation
- API Automation
- Database Validation
- End-to-End Testing
- SQLite Integration
- Environment Variables
- GitHub Actions (CI)
- Cross-platform Development (Windows & Linux)
- TypeScript
- Playwright Best Practices

---

## 📌 Future Improvements

- Docker support
- Test data generation
- Allure reporting
- Performance testing
- Visual regression testing
- Parallel GitHub Actions matrix

---

Developed by **Constantinos Kyrri**
