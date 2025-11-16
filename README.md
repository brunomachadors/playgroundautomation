# 🎭 Test Automation Warm-Up with Playwright

Welcome to the **Warm-Up: Test Automation with Playwright** project — the official hands-on automation playground used during the **Mindera Code Academy** course.

This repository was designed to teach students **real-world, industry-level automation practices**, starting from the basics and evolving into a scalable, fully structured Playwright framework using Page Objects, reusable assertions, mobile testing, and API automation.

---

# 🚀 Project Overview

This project introduces full-stack test automation using **Playwright**, guiding students through:

* UI automation
* Form handling
* Dynamic tables
* Advanced locators
* Page Object Model (POM)
* Mobile testing
* Drag & drop
* CRUD scenarios
* API testing using `APIRequestContext`
* Final project — full e-commerce workflow

Everything is automated against the custom-built training app:

👉 **Playground – Test Automation Practice Site**
[https://playground-drab-six.vercel.app/](https://playground-drab-six.vercel.app/)

---

# 🌐 Application Areas Covered

| Area              | Description                                                  | Lesson   |
| ----------------- | ------------------------------------------------------------ | -------- |
| 🏠 Home           | Navigation & text validation                                 | Lesson 1 |
| 🔐 Login          | Correct/incorrect login validation                           | Lesson 2 |
| 🧾 Forms          | Inputs, selects, checkboxes                                  | Lesson 3 |
| 🧱 POM            | Page Object Model structure                                  | Lesson 4 |
| 📊 Dynamic Tables | Sorting, filtering                                           | Lesson 5 |
| 🧪 API Page       | PokéAPI response validation                                  | Lesson 6 |
| 🗂️ Tasks         | CRUD and reorder with drag & drop; desktop & mobile versions | Lesson 7 |
| 🏪 Store          | Stock, checkout, payment — final project                     | Lesson 8 |

---

# 🧩 Tools & Technologies

| Tool                | Purpose                          |
| ------------------- | -------------------------------- |
| **Playwright**      | Main automation framework        |
| **Node.js**         | Runtime for JavaScript execution |
| **VS Code**         | IDE with Playwright Test Runner  |
| **Git/GitHub**      | Version control + submission     |
| **Prettier/ESLint** | Code formatting (recommended)    |

---

# 📁 Updated Project Structure

```
playwright-warmup/
│
├── tests/
│   ├── specs/
│   │   ├── desktop/            # Desktop UI tests
│   │   ├── mobile/             # Mobile UI tests
│   │   └── api/                # API tests
│   │
│   ├── pages/                  # Page Objects
│   │   └── tasks.page.js
│   │
│   ├── data/                   # Test data (inputs, messages, constants)
│   │   └── tasks.data.js
│   │
│   └── utils/                  # Helpers
│
├── playwright.config.js        # Full multi-project configuration
├── package.json
└── README.md
```

---

# ⚙️ Playwright Configuration Highlights

The updated config includes:

* Multiple test directories (desktop, mobile, API)
* Mobile device emulation (`Pixel 5`, `iPhone 12`)
* Videos on failure
* Screenshots on failure
* Traces on first retry
* Parallelization + CI-friendly defaults
* Cleaner project mapping

```js
export default defineConfig({
  testDir: './tests/specs',  
  fullyParallel: true,
  reporter: 'html',

  use: {
    baseURL: 'https://playground-drab-six.vercel.app',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name: 'Desktop Chrome',
      testDir: './tests/specs/desktop',
      use: devices['Desktop Chrome'],
    },
    {
      name: 'Mobile iPhone',
      testDir: './tests/specs/mobile',
      use: devices['iPhone 12'],
    },
    {
      name: 'Mobile Android',
      testDir: './tests/specs/mobile',
      use: devices['Pixel 5'],
    },
    {
      name: 'API Tests',
      testDir: './tests/specs/api',
    },
  ],
});
```

---

# 🧠 Page Object Model (Updated)

The `TasksPage` class now includes:

✔ Desktop + mobile locators
✔ Desktop + mobile actions
✔ Shared locators
✔ Test steps (`test.step()`) for reporting
✔ Clear method naming
✔ Organized structure following top POM practices

This allows students to write extremely clean tests like:

```js
await tasks.addTask(text);
await tasks.expectTaskVisibleDesktop(1, text);
```

---

# 🧪 Example Test Scenarios

### ✓ Desktop

* Add task
* Edit task
* Cancel edit
* Complete task
* Validate sequential ID generation
* Reorder tasks (drag & drop)

### ✓ Mobile

* Add task
* Edit task
* Complete task
* Validate priorities
* Mobile-specific locators

### ✓ API

* GET Pokémon list
* Validate response schema
* Validate status codes
* Extract and assert data

---

# 🧰 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run desktop-only

```bash
npx playwright test --project="Desktop Chrome"
```

### Run mobile-only

```bash
npx playwright test --project="Mobile iPhone"
```

### Run API tests

```bash
npx playwright test --project="API Tests"
```

### UI Mode (recommended for students)

```bash
npx playwright test --ui
```

### Open last HTML report

```bash
npx playwright show-report
```

---

# 💡 Additional Recommended Improvements

These are suggestions to further student learning:

### ✔ Add linting & formatting

ESLint + Prettier help maintain consistent code style.

### ✔ Add environment switching

Use `dotenv` to load URLs for staging/production.

### ✔ Add custom HTML reporter

You can integrate **Allure Reports**, which students love visually.

### ✔ Create challenges

Provide students with:

* Only the Page Objects
* Only the data
* A spec template

And let them build the tests.

### ✔ Add CI pipeline

Github Actions or GitLab CI to run tests automatically.

---

# 🧑‍🏫 Course Context

This project is part of the **Mindera Code Academy** and is maintained by:

### **Instructor: Bruno Machado**

The repository is used during 8 hands-on lessons covering everything from the fundamentals to a complete final project.

---

# 💬 Need Help?

* Ask during class
* Open an issue
* Check Playwright docs: [https://playwright.dev/docs/intro](https://playwright.dev/docs/intro)

---

# 📜 License

MIT License — free to use for teaching and personal development.

---

🧡 *Created for the Mindera Code Academy — empowering testers to think beyond manual testing.*
