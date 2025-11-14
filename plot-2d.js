const barLen = 3;
const DIMENSION = 5;
const graph = () => {

  const grid = [];
  for (let column = 0; column < DIMENSION; column++) {
    const row = '_'.repeat(5).split(''); //value is column count and index is row ;
    grid.push(row);
  }

  for (let column = 0; column < barLen; column++) {
    grid[column + (5 - barLen)][0] = '*';
    grid[column][1] = '*';

  }
  return grid.join('\n');

};
console.log(graph());;