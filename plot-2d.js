const DIMENSION = 20;
// swirl in 2d rotate and reach center 
const CELL = ' ';

const plotBarGraph = (barWeights) => {
  const grid = [];
  const row = CELL.repeat(DIMENSION);

  for (let column = 0; column < DIMENSION; column++) {
    const cells = row.split('');
    grid.push(cells);
  }

  let columnOffset = 0;
  for (let colPos = 0; colPos < barWeights.length; colPos += 1) {
    const barWeight = barWeights[colPos];
    const rowOffset = (DIMENSION - barWeight);

    for (let row = 0; row < barWeight; row += 1) {

      const x = row + rowOffset;

      const y = colPos + columnOffset;
      grid[rowOffset - 1][y + 1] = '_';
      grid[x][y] = '|';
      grid[x][y + 2] = '|';
    }

    columnOffset += 2;

  };

  return grid.map(row => row.join('')).join('\n');
};

const array = [1, 2, 3, 9, 3, 2];
console.log(plotBarGraph(array));;