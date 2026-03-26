# Jest Template

A minimal JavaScript project template pre-configured with Jest, Babel, ESLint, and Prettier — ready for test-driven development (TDD) out of the box.

## Features

- **Jest** — test runner
- **Babel** — ESM/CJS conversion so Jest works with modern `import`/`export` syntax
- **ESLint** — linting with Jest globals pre-configured (no false `test`/`expect` errors)
- **Prettier** — consistent code formatting

## Using This Template

Click **Use this template** at the top of the repo, then clone your new repo and install dependencies:

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME
cd YOUR_REPO_NAME
npm install
```

## Running Tests

```bash
npm test
```

## Project Structure

```
src/
├── yourModule.js              # Your source files go here
└── __tests__/
    └── yourModule.test.js     # Your test files go here
```

## Writing Your First Test

1. Create a source file in `src/`:

```js
// src/add.js
export const add = (a, b) => a + b;
```

2. Create a test file in `src/__tests__/`:

```js
// src/__tests__/add.test.js
import { add } from '../add.js';

test('adds two numbers', () => {
  expect(add(2, 3)).toBe(5);
});
```

3. Run `npm test` and watch it pass. ✅

## Tech Stack

- JavaScript (ESM)
- [Jest](https://jestjs.io/)
- [Babel](https://babeljs.io/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
