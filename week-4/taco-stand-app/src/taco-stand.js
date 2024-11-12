/**
 * Author: Dua Hasan
 * Date: 11/12/2024
 * File Name: src/taco-stand.js
 * Description: Create a class TacoStandEmitter that extends Node's EventEmitter class. This class should include methods
 * to emit events for serving customers, preparing tacos, and handling rush orders.
 */

const EventEmitter = require("events");

// TODO: Create a TacoStandEmitter class that extends EventEmitter and implements the following methods: serveCustomer, prepareTaco, and handleRush
class TacoStandEmitter extends EventEmitter {
    serveCustomer(customer) {
        this.emit("serve", customer);
    }

    prepareTaco(taco) {
        this.emit("prepare", taco);
    }

    handleRush(rush) {
        this.emit("rush", rush);
    }
}

module.exports = TacoStandEmitter;