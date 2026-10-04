# TypeScript Exercises

Repository with basic programming logic exercises in TypeScript.

## Contents

1. **Late fee calculation** — calculates the total fine based on the number of days late and the fine value per day.
2. **Delay classification** — uses `if` to classify a delay as "Em dia" (on time), "Atraso leve" (minor delay) or "Atraso alto" (major delay).
3. **Book category (switch)** — uses `switch` to display a book's category based on a numeric option.
4. **Multiples of 10** — iterates over a list of numbers and flags which ones are multiples of 10, suggesting to check the shelf in those cases.
5. **Max, min and average** — calculates the highest value, the lowest value, and the average of a list of numbers (book page counts).
6. **Loans** — sums up the values in a list, calculates the average, and counts how many items are greater than or equal to 15.
7. **Purchase total** — takes a product's price and the quantity bought and calculates the total purchase value.
8. **Student status** — calculates the average of three grades and uses `if` to report whether the student is approved (average ≥ 7), in recovery (between 5 and 6.9) or failed (below 5).
9. **Support menu (switch)** — uses `switch` to display the option chosen in a support menu (check order, open ticket, talk to an agent or exit), handling invalid options.
10. **Even numbers** — iterates from 1 to N and shows how many even numbers were found and their sum.
11. **Class grades** — iterates over an array of grades and calculates the class average, the highest grade and the lowest grade.
12. **Grades summary with functions** — uses one function to calculate the average of an array of grades and another to count how many grades are greater than or equal to 7

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
