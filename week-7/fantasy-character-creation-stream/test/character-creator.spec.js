const CharacterCreator = require('../src/character-creator');

describe('CharacterCreator', () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const character = new CharacterCreator();
    character.write('Warrior;Male;I love apples;');
    
    let output = '';
    character.on('data', chunk => {
      output += chunk.toString();
    });
    
    character.on('end', () => {
      expect(output).toBe('Character: Warrior, Gender: Male, Fun Fact: I love apples');
      done();
    });
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    const character = new CharacterCreator();
    character.on('error', (err) => {
      expect(err.message).toBe('Invalid input');
      done();
    });
    
    character.write('');
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const character = new CharacterCreator();
    character.write('Mage;Female;I can teleport;');
    
    let output = '';
    character.on('data', chunk => {
      output += chunk.toString();
    });
    
    character.on('end', () => {
      expect(output).toBe('Character: Mage, Gender: Female, Fun Fact: I can teleport');
      done();
    });
  });
});