const DIMENSION = 50;
// swirl in 2d rotate and reach center 
const CELL = ' ';

const plotBarGraph = (barWeights) => {
  const grid = [];
  const row = CELL.repeat(DIMENSION);

  for (let column = 0; column < DIMENSION; column++) {
    const cells = row.split('');
    grid.push(cells);
  }

  let spaceBetweenBar = 0;

  for (let colPos = 0; colPos < barWeights.length; colPos += 1) {
    const barWeight = barWeights[colPos];
    const rowOffset = DIMENSION - barWeight;
    const peakX = rowOffset - 1;
    for (let row = 0; row < barWeight; row += 1) {
      const x = row + rowOffset;
      const y = colPos + spaceBetweenBar;

      console.log(x, y);
      // grid[rowOffset][DIMENSION - 1] = 1;
      grid[peakX][y + 1] = '_';//set the top of 
      grid[peakX][y + 2] = '_';
      grid[peakX][y + 1] = `${barWeight}`;
      grid[x][y] = '|';
      grid[x][y + 3] = '|';
    }
    spaceBetweenBar += 4;
  };
  grid[DIMENSION - 1 - 6][DIMENSION - 30] = 't';

  return grid.map(row => row.join('')).join('\n');
};

const array = [1, 2, 3, 9, 3, 2, 4];
console.log(plotBarGraph(array));;