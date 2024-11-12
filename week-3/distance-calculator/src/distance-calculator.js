const planetDistances = {
  Mercury:0.39,
  Venus: 0.72,
  Earth: 1.0,
  Mars: 1.52,
  Jupiter: 5.2,
  Saturn: 9.58,
  Uranus: 19.22,
  Neptune: 30.05
};

function calculateDistance(planet1, planet2) {
  // TODO: Implement this function
  const distance1 = planetDistances[planet1];
  const distance2 = planetDistances[planet2];

  if (distance1 === undefined || distance2 === undefined) {
    throw new Error("Invalid planet name provided");
  }

  return Math.abs(distance1 - distance2);
}

module.exports = calculateDistance;