/**
 * Author: Dua Hasan
 * Date: 10/29/2024
 * File Name: index.js
 * Description: import the functions from recipes.js
*/

// TODO: Import your module using require
const { createRecipe, setTimer, quit} = require('./recipes');

// TODO: Implement your CLI program here
console.log(createRecipe(['flour', 'suger', 'eggs']));
console.log(setTimer(15));
console.log(quit());