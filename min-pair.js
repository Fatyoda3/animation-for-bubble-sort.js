const distance = (dx, dy) => Math.sqrt(dx ** 2, dy ** 2);
const difference = (p1, p2) => [p1[0] - p2[0], p1[1] - p2[1]];

const leastDistancePair = (pairs) => {
  const dPairs = {};
  for (let i = 0; i < pairs.length; i++) {
    for (let j = i + 1; j < pairs.length; j++) {

      const diff = difference(pairs[i], pairs[j]);
      const currentDistance = distance(...diff);
      dPairs[currentDistance] = [pairs[i], pairs[j]];
    }
  }
  console.log(dPairs);
  let pairMin = [];
  let min = Infinity;
  for (const dPair in dPairs) {

    if (min >= dPair) {
      min = dPair;
      pairMin = dPairs[min];
    }
  }

  return pairMin;
};

const t = leastDistancePair([[0, 0], [1, 1], [5, 0], [1, 0]]);
const targetPair = [[1, 1], [1, 0]];
console.log(t, JSON.stringify(targetPair) === JSON.stringify(t));

