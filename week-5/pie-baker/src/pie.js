/**
 * Author: Dua Hasan
 * Date: 11/23/24
 * File Name: pie.js
 * Description: Simulates a pie-baking process.
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ['flour', 'sugar', 'butter'];
    for (let ingredient of essentialIngredients) {
        if (!ingredients.includes(ingredient)) {
            console.warn(`Essential ingredient ${ingredient} is missing.`);
            process.exit(1);
        }
    }
    console.log(`Successfully baked a ${pieType} pie!`);
    return `Successfully baked a ${pieType} pie!`;
}

module.exports = { bakePie };