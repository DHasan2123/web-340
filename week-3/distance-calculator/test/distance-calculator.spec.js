const assert = require('assert');
const calculateDistance = require('../src/distance-calculator');

function testEarthToMars() {
  // TODO: Implement this function
  try {
    assert.strictEqual(calculateDistance('Earth', 'Mars'), 0.52);
    console.log("Passed: testEarthToMars");
    return true;
  } catch (error) {
     console.error(`Failed testEarthToMars: ${error.message}`);
     return false;
  }

}

function testVenusToJupiter() {
  try {
      assert.strictEqual(calculateDistance('Venus', 'Jupiter'), 4.48);
      console.log("Passed: testVenusToJupiter");
      return true;
  } catch (error) {
      console.error(`Failed testVenusToJupiter: ${error.message}`);
      return false;
  }
}

function testMercuryToNeptune() {
  try {
      assert.strictEqual(calculateDistance('Mercury', 'Neptune'), 29.66);
      console.log("Passed: testMercuryToNeptune");
      return true;
  } catch (error) {
      console.error(`Failed testMercuryToNeptune: ${error.message}`);
      return false;
  }
}

// Call your test functions here
testEarthToMars();
testVenusToJupiter();
testMercuryToNeptune();