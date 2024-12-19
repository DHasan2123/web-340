// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  beforeEach(() => {
    gameCharacters = new GameCharacters('game-characters-data.js');
  });

  test("should return game characters data", (done) => {
    // TODO: Implement this test
    gameCharacters.getCharacters((error, data) => {
      expect(error).toBeNull();
      expect(data).toEqual([
        { class: 'Warrior', gender: 'Male', specialAbility: 'Berserker Rage' },
        { class: 'Mage', gender: 'Female', specialAbility: 'Fireball' },
        { class: 'Rogue', gender: 'Other', specialAbility: 'Stealth' },
      ]);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    const brokenGameCharacters = new GameCharacters('nonexistent-file.js');
    brokenGameCharacters.getCharacters((error, data) => {
      expect(error).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    const failingGameCharacters = new GameCharacters('failing-script.js');
    failingGameCharacters.getCharacters((error, data) => {
      expect(error).not.toBeNull();
      expect(data).toBeNull();
      done();
    });
  });
});