// const barLen = 3;
const DIMENSION = 20;
// swirl in 2d rotate and reach center 
const CELL = ' ';
const array = [1, 2, 3];
const graph = () => {
  const grid = [];
  const row = CELL.repeat(DIMENSION);
  for (let column = 0; column < DIMENSION; column++) {
    const cells = row.split(''); //value is column count and index is row ;
    grid.push(cells);
  }

  let offset = 0;
  for (let rowPos = 0; rowPos < array.length; rowPos += 1) {
    const barLen = array[rowPos];

    for (let column = 0; column < barLen; column += 1) {
      const currentColumn = column + (DIMENSION - barLen);
      // console.log(currentColumn, currentColumn + 1);
      grid[currentColumn][rowPos + offset] = '|';
      grid[currentColumn][rowPos + 2 + offset] = '|';
    }
    offset += 2;

  };

  /* 
  __
  | |
  | |
  */
  return grid.map(row => row.join('')).join('\n');
};
console.log(graph());;