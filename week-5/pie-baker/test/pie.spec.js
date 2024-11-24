/**
 * Author: Dua Hasan
 * Date: 11/23/24
 * File Name: pie.spec.js
 * Description: Unit tests for the bakepie function.
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
const { jest } = require('@jest/globals');

test('bakes a pie successfully when all ingredients are present', () => {
    const pieType = 'apple';
    const ingredients = ['flour', 'sugar', 'butter', 'apples'];
    const consoleLogSpy = jest.spyOn(console, 'log');
    const result = bakePie(pieType, ingredients);
    expect(result).toBe('Successfully baked a apple pie!');
    expect(consoleLogSpy).toHaveBeenCalledWith('Successfully baked a apple pie!');
    consoleLogSpy.mockRestore();
});

test('logs warning and exits if flour is missing', () => {
    const pieType = 'apple';
    const ingredients = ['sugar', 'butter', 'apples'];
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    const processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
    bakePie(pieType, ingredients);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Essential ingredient flour is missing.');
    expect(processExitSpy).toHaveBeenCalledWith(1);

    consoleWarnSpy.mockRestore();
    processExitSpy.mockRestore();
});

test('logs warning and exits if sugar is missing', () => {
    const pieType = 'apple';
    const ingredients = ['flour', 'butter', 'apples'];
    const consoleWarnSpy = jest.spyOn(console, 'warn');
    const processExitSpy = jest.spyOn(process, 'exit').mockImplementation(() => {});
    bakePie(pieType, ingredients);
    expect(consoleWarnSpy).toHaveBeenCalledWith('Essential ingredient sugar is missing.');
    expect(processExitSpy).toHaveBeenCalledWith(1);

    consoleWarnSpy.mockRestore();
    processExitSpy.mockRestore();
});