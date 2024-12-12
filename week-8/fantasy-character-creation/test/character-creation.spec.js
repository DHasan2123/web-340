"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:
const { createCharacter, getCharacters } = require('../src/character-creation');
const fs = require('fs');
const path = require('path');
const characterFile = path.join(__dirname, '../characters.json');
// For promises:
// const fs = require('fs').promises;

describe('Character Creation Module', () => {
  beforeEach(() => {
    // Clear file before each test
    fs.writeFileSync(characterFile, '[]', 'utf8');
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test('should write character data to a file', async () => {
    const character = { class: 'Warrior', gender: 'Male', funFact: 'Loves dragons' };
    await createCharacter(character);
    const data = JSON.parse(fs.readFileSync(characterFile, 'utf8'));
    expect(data).toContainEqual(character);
  });

  // 2. Test that getCharacters reads characters from the file
  test('should read character data from a file', async () => {
    const character = { class: 'Mage', gender: 'Female', funFact: 'Speaks Elvish' };
    fs.writeFileSync(characterFile, JSON.stringify([character]), 'utf8');
    const characters = await getCharacters();
    expect(characters).toContainEqual(character);
  });

  // 3. Test that createCharacter handles errors when writing to the file
  test('should handle errors when reading from the file', async () => {
    fs.unlinkSync(characterFile); // Remove the file to trigger an error
    await expect(getCharacters()).rejects.toThrow('ENOENT');
  });
});