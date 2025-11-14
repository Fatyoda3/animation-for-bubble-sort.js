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
  for (let colPos = 0; colPos < array.length; colPos += 1) {
    const barWeight = array[colPos];
    for (let row = 0; row < barWeight; row += 1) {
      const currentRow = row + (DIMENSION - barWeight);
      grid[currentRow][colPos + 1 + offset] = '*';
      // console.log(currentColumn, currentColumn + 1);
      grid[currentRow][colPos + offset] = '|';
      grid[currentRow][colPos + 2 + offset] = '|';
    }
    offset += 2;

  };

  return grid.map(row => row.join('')).join('\n');
};
console.log(graph());;