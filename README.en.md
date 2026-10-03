# TypeScript Exercises

Repository with basic programming logic exercises in TypeScript.

## Contents

1. **Late fee calculation** — calculates the total fine based on the number of days late and the fine value per day.
2. **Delay classification** — uses `if` to classify a delay as "Em dia" (on time), "Atraso leve" (minor delay) or "Atraso alto" (major delay).
3. **Book category (switch)** — uses `switch` to display a book's category based on a numeric option.
4. **Multiples of 10** — iterates over a list of numbers and flags which ones are multiples of 10, suggesting to check the shelf in those cases.
5. **Max, min and average** — calculates the highest value, the lowest value, and the average of a list of numbers (book page counts).
6. **Loans** — sums up the values in a list, calculates the average, and counts how many items are greater than or equal to 15.

## How to run

You need [Node.js](https://nodejs.org/) and `ts-node` (or the `tsc` compiler) installed.

```bash
npm install -g ts-node typescript
ts-node file-name.ts
```

Or, to compile and run with Node:

```bash
tsc file-name.ts
node file-name.js
```
