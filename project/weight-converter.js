/**
 * Author: Dua Hasan
 * Date: 10/23/2024
 * File Name: weight-converter.js
 * Description:  a script that converts pounds to kilograms.
*/

"use strict";

// TODO: Implement the weight conversion logic here
// Step 1: Check if a command line argument was provided
if (Process.argv.length <3) {
    console.error("Usage: node weight-converter.js <weight_in_pounds>");
    process.exit(1);
}

// Step 2: Get the input (weight in pounds) from command line argument
const pounds = process.argv[2];

// Step 3: Check if the input is a number
if (isNaN(pounds)) {
    console.error("Input must be a number.");
    process.exit(1);
}

// Step 4: Convert pounds to kilograms
const kilograms = pounds * 0.453592;

// Print the results, rounded to two decimal places
console.log(`${pounds} pounds  is ${kilograms.toFixed(2)} kilograms.`);