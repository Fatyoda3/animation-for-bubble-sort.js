const pad = el => (`${el}`).padEnd(3);
const repeatBlock = (repeat, block) => (pad(repeat)).concat(block.repeat(repeat));

const stringRepOf = (array, i, j) => {
  const sortedPart = array.slice(0, i);
  const remainingPart = array.slice(i);

  const temp = sortedPart
    .map(el => repeatBlock(el, '🟨'))
    .concat(remainingPart.map((el) => repeatBlock(el, '🟩')));

  temp[i] = repeatBlock(array[i], '⬜️');
  temp[j] = repeatBlock(array[j], '🟥');

  return `${temp.join('\n')}\n\n${array.toString()}`;
};
const delay = () => { for (let _ = 0; _ < 10e8; _++); };

const animate = (str) => {
  console.log(str);
  delay();
  console.clear();
};

const sort = (arr) => {
  console.clear();
  delay();
  delay();
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        animate(stringRepOf(arr, i, j));
      }
      animate(stringRepOf(arr, i, j));

    }

  }

  console.log(stringRepOf(arr, Infinity, -Infinity));
  return arr;
};

sort([2, 5, 11, 7, 3, 1]);