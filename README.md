# Playwright Framework

Basic Playwright test automation project using TypeScript.

## Prerequisites

- Node.js 18 or later
- npm
- Git

Check the installed versions:

```powershell
node --version
npm --version
```

## Installation and setup

Clone the repository and open the project folder:

```powershell
git clone https://github.com/geetakolhe/Playwright_FW.git
cd Playwright_FW
```

Install the project dependencies:

```powershell
npm install
```

Install the Playwright browsers:

```powershell
npx playwright install
```

To install only Chromium:

```powershell
npx playwright install chromium
```

## Project structure

```text
Playwright_FW/
|-- tests/                 # Test specifications
|-- playwright.config.ts   # Playwright configuration
|-- package.json           # Project dependencies and scripts
|-- package-lock.json
|-- .gitignore
```

## Run tests

Run all tests:

```powershell
npx playwright test
```

Run tests with the browser visible:

```powershell
npx playwright test --headed
```

Run a specific test file:

```powershell
npx playwright test tests/example.spec.ts
```

Open the HTML test report:

```powershell
npx playwright show-report
```

## Playwright Codegen

Codegen opens a browser and records your actions while generating Playwright code.

Start Codegen with a URL:

```powershell
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter
```

To save generated TypeScript directly to a test file:

```powershell
npx playwright codegen https://app.thetestingacademy.com/playwright/multiple_element_filter -o tests/generated.spec.ts
```

After recording the flow, review the generated code and run it:

```powershell
npx playwright test tests/generated.spec.ts --headed
```

You can also start Codegen without a URL and navigate manually:

```powershell
npx playwright codegen
```

## Create a new test

Create a file such as `tests/login.spec.ts`:

```typescript
import { test, expect } from '@playwright/test';

test('page has the expected title', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example Domain/);
});
```

Run the new test:

```powershell
npx playwright test tests/login.spec.ts
```

## Git workflow

Check the current branch and working tree:

```powershell
git status
```

Create a feature branch:

```powershell
git switch -c feature/my-test
```

Commit and push your changes:

```powershell
git add .
git commit -m "Add Playwright test"
git push -u origin feature/my-test
```

Open a Pull Request from the feature branch into `main`.