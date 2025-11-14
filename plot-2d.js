// const barLen = 3;
const DIMENSION = 15;
// swirl in 2d rotate and reach center 
const array = [1, 1, 3, 4];
const CELL = '_';
const graph = () => {
  const grid = [];

  for (let column = 0; column < DIMENSION; column++) {
    const row = CELL.repeat(DIMENSION).split(''); //value is column count and index is row ;
    grid.push(row);
  }
  let offset = 0;
  for (let rowPos = 0; rowPos < array.length; rowPos += 1) {
    const barLen = array[rowPos];

    for (let column = 0; column < barLen; column += 1) {
      const currentColumn = column + (DIMENSION - barLen);
      console.log(currentColumn, currentColumn + 1);
      grid[currentColumn][rowPos + offset] = '|';
      grid[currentColumn][rowPos + 1 + offset] = '|';
    }
    offset++;

  };

  /* 
  __
  | |
  | |
  */
  return grid.map(row => row.join('')).join('\n');
};
console.log(graph());;