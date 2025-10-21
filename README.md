
# 🎭 Test Automation Warm-Up with Playwright

Welcome to the **Test Automation Warm-Up with Playwright** — a hands-on project designed for the **Mindera Code Academy** course.  
This repository serves as the foundation for all practical sessions, from the first test setup to the final project (the Lojinha!).

---

## 🚀 Project Overview

This project aims to introduce **end-to-end testing with Playwright**, providing students with the fundamental skills to create, organize, and execute automated tests for web applications.

Throughout the course, participants will learn how to automate different scenarios such as:
- UI interaction and navigation
- Form validation
- Dynamic tables
- API testing
- CRUD applications
- Full e-commerce flow (final project)

---

🌐 Test Playground Application

Throughout this course, we’ll use the following application for our automation exercises:
👉 Playground – Test Automation Practice Site

This web application was created specifically for hands-on Playwright training, covering multiple UI components and real-world scenarios you’ll encounter during testing projects.

🔍 Main Features to Automate
Area	Description	Used In
🏠 Home Page	Entry point for navigation and basic validations.	Lesson 1 — Text validation & navigation
🔐 Login Page	Simple login form with success and error messages.	Lesson 2 — Login & interaction tests
🧾 Form Page	Multiple input fields, dropdowns, checkboxes, and submit actions.	Lesson 3 — Forms & validation
📊 Table Page	Dynamic data table with filters, sorting, and selection.	Lesson 5 — Dynamic tables
🧪 API Data Page	Displays Pokémon data fetched from a public API.	Lesson 6 — API testing with PokéAPI
🗂️ Tasks Page	CRUD system to add, edit, and remove tasks.	Lesson 7 — CRUD automation
🏪 Store Page	Simulates an online store with stock, checkout, and payment.	Lesson 8 — Final project: Store automation
💡 Goal

The goal is to simulate real automation challenges in a safe and controlled environment.
Each section of the Playground will be progressively automated as new Playwright features are introduced during the course.

## 🧩 Tools & Technologies

| Tool | Purpose |
|------|----------|
| **Playwright** | Main automation framework |
| **Node.js** | Runtime environment for JavaScript/TypeScript |
| **npm** | Package manager to install dependencies |
| **VS Code** | Code editor with Playwright integration |
| **Git** | Version control system |
| **GitHub** | Repository hosting and collaboration |

---

## 🛠️ Installation Guide

### 1. Prerequisites
Make sure you have the following installed on your machine:
- [Node.js (LTS)](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Visual Studio Code](https://code.visualstudio.com/)

### 2. Clone the Repository
```bash
git clone https://github.com/brunomachadors/playgroundautomation.git
cd playgroundautomation
```

### 3. Install Dependencies
```bash
npm install
# or
pnpm install
```

### 4. Verify Playwright Setup
```bash
npx playwright install
npx playwright test
```

---

## 🧠 Project Structure

```
playwright-warmup/
│
├── tests/                  # Test files for each lesson
│   ├── lesson01_first_test.spec.ts
│   ├── lesson02_login.spec.ts
│   ├── lesson03_forms.spec.ts
│   ├── lesson04_pom.spec.ts
│   ├── lesson05_tables.spec.ts
│   ├── lesson06_api.spec.ts
│   ├── lesson07_crud.spec.ts
│   └── lesson08_store.spec.ts
│
├── pages/                  # Page Object Model (POM) structure
│   ├── login.page.ts
│   ├── form.page.ts
│   └── dashboard.page.ts
│
├── utils/                  # Helpers, constants, data
│   └── users.ts
│
├── playwright.config.ts    # Playwright configuration file
├── package.json
└── README.md
```

---

## 🧭 Learning Path

| Lesson | Topic | Goal |
|--------|--------|------|
| **1** | Fundamentals + First Test | Understand automation concepts and run first test |
| **2** | Login & Basic Interactions | Automate login flow and work with locators |
| **3** | Forms & Validations | Fill out forms and validate UI feedback |
| **4** | Page Object Model | Refactor and structure tests using POM |
| **5** | Dynamic Tables | Work with table data and filters |
| **6** | API Testing | Test APIs using Playwright’s APIRequestContext |
| **7** | CRUD App Automation | Automate task management (create/edit/delete) |
| **8** | Final Project: Store | Combine all knowledge into a full e-commerce flow |

---

## 🧪 Running Tests

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/lesson02_login.spec.ts
```

### Run tests with UI mode
```bash
npx playwright test --ui
```

### Generate and view report
```bash
npx playwright show-report
```

---

## 🧰 Troubleshooting

| Issue | Solution |
|--------|-----------|
| `npx playwright test` not found | Ensure Node.js and npm are installed and available in PATH |
| Browser not launching | Run `npx playwright install` to install necessary browsers |
| Permission denied errors (macOS/Linux) | Use `sudo` or adjust file permissions |
| Test timeout | Use `page.waitForSelector()` or increase test timeout in config |

---

## 🧑‍🏫 Course Context

This repository is used during the **Mindera Code Academy** course:  
**“Warm-Up: Test Automation with Playwright”**, led by **Bruno Machado**.

The project covers the complete learning journey:
- Setting up the environment
- Understanding core Playwright concepts
- Building structured automation projects
- Practicing with real-life examples and final project delivery

---

## 💬 Support

If you encounter issues during setup or execution:
- Ask during class 💬  
- Open an issue on GitHub 🐞  
- Check [Playwright Docs](https://playwright.dev/docs/intro)

---

## 📜 License

This project is licensed under the MIT License — feel free to use it for learning or personal practice.

---

🧡 *Built for the Mindera Code Academy — empowering future testers to go beyond the manual mindset.*  
**Instructor:** Bruno Machado  
**Version:** 1.0.0
