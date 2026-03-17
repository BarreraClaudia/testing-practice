# Testing Practice

Practicing test-driven development (TDD) using Jest in a vanilla JavaScript project.

## Getting Started

1. Clone the repo and install dependencies:

```bash
   git clone https://github.com/BarreraClaudia/testing-practice
   cd testing-practice
   npm install
```

2. Run the tests:

```bash
   npm test
```

## Project Structure

```
src/
├── analyzeArray.js
├── caesarCipher.js
├── calculator.js
├── capitalize.js
├── reverseString.js
└── __tests__/
    └── *.test.js
```

## Exercises

| File               | Description                                      |
| ------------------ | ------------------------------------------------ |
| `calculator.js`    | Basic arithmetic operations                      |
| `caesarCipher.js`  | Encrypts a string using a character shift        |
| `capitalize.js`    | Capitalizes the first letter of a string         |
| `reverseString.js` | Reverses a given string                          |
| `analyzeArray.js`  | Returns min, max, length and average of an array |

## Config Notes

- **Babel** (`babel.config.js`) — Jest lacks stable ESM support, so Babel handles ESM/CJS conversion
- **ESLint** (`eslint.config.mjs`) — Jest globals like `test` and `expect` are explicitly configured to prevent linting errors.
- **Prettier** (`.prettierrc`) — standard formatting setup

## Tech Stack

- JavaScript
- Jest
- Babel
- ESLint
- Prettier
