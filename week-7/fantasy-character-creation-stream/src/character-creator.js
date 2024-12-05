const { Duplex } = require('stream');

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.characterData = '';
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const data = chunk.toString();
    if (!data) {
      this.emit('error', new Error('Invalid input'));
    } else {
      this.characterData += data;
      callback();
    }
  }

  _read(size) {
    // TODO: Implement your _read method here
    this.push(this.characterData);
    this.push(null);  // End the stream
  }

  // Method to format character data
  formatCharacter() {
    const [classType, gender, funFact] = this.characterData.split(';');
    return `Character: ${classType}, Gender: ${gender}, Fun Fact: ${funFact}`;
  }
}

module.exports = CharacterCreator;