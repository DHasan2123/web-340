/**
 * Author: Dua Hasan
 * Date: 11/12/2024
 * File Name: test/taco-stand.spec.js
 * Description: Create unit tests for each method in TacoStandEmitter by registering event listener,
 * triggering the methods, and checking if the emitted events are received correctly.
 */

"use strict";
const assert = require("assert");
const TacoStandEmitter = require("../src/taco-stand");

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("serve", (customer) => {
      assert.strictEqual(customer, "John");
      console.log("Passed testServeCustomer");
    });
    tacoStand.serveCustomer("John");
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
  }
}

function testPrepareTaco() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("prepare", (taco) => {
      assert.strictEqual(taco, "beef");
      console.log("Passed testPrepareTaco");
    });
    tacoStand.prepareTaco("beef");
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
  }
}

function testHandleRush() {
  const tacoStand = new TacoStandEmitter();
  try {
    tacoStand.on("rush", (rush) => {
      assert.strictEqual(rush, "lunch");
      console.log("Passed testHandleRush");
    });
    tacoStand.handleRush("lunch");
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
  }
}

testServeCustomer();
testPrepareTaco();
testHandleRush();