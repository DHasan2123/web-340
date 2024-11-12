/**
 * Author: Dua Hasan
 * Date: 11/12/2024
 * File Name: src/index.js
 * Description: Implement a command-line interface that listens for user input and respond based 
 * on commands for serving, preparing, or handling a rush.
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./taco-stand");

const tacoStand = new TacoStandEmitter();

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rush) => {
  console.log(`Taco Stand handles rush: ${rush}`);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");

  // TODO: Handle the commands
  if (command === "serve") {
    tacoStand.serveCustomer(args.join(" "));
  } else if (command === "prepare") {
    tacoStand.prepareTaco(args.join(" "));
  } else if (command === "rush") {
    tacoStand.handleRush(args.join(" "));
  } else {
    console.log("Unknown command");
  }
});

console.log('Enter a command: "serve <name>", "prepare <taco>", or "rush <event>"');