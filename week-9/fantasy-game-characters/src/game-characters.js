// game-characters.js
const { spawn } = require("child_process");
const path = require('path');

class GameCharacters {
  constructor(scriptFileName) {
    // TODO: Set the script file path
    this.scriptPath = path.join(__dirname, scriptFileName);
  }

  getCharacters(callback) {
    // TODO: Implement this method
    const child = spawn('node', [this.scriptPath]);

    let data = '';
    let error = '';

    child.stdout.on('data', (chunk) => {
      data += chunk;
    });

    child.stderr.on('data', (chunk) => {
      error += chunk;
    });

    child.on('close', (code) => {
      if (code !== 0) {
        console.error(`Process exited with code ${code}`);
        callback(new Error(`Process failed with code ${code}: ${error}`), null);
      } else if (error) {
        console.error(`Error from child process: ${error}`);
        callback(new Error(error), null);
      } else {
        try {
          const parsedData = JSON.parse(data);
          callback(null, parsedData);
        } catch (parseError) {
          console.error(`Failed to parse JSON: ${parseError.message}`);
          callback(parseError, null);
        }
      }
    });

    child.on('error', (error) => {
      console.error('Failed to start child process:', error);
      callback(error, null);
    });
  }
}

module.exports = { GameCharacters };