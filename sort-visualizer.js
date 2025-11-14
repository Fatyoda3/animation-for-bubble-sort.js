const stringRepOf = (array = [], i, j) => {
  const sortedHalf = array.slice(0, i);
  const unsorted = array.slice(i);

  const temp = sortedHalf
    .map(el => (el + '').padEnd(3) + '🟨'.repeat(el))
    .concat(unsorted.map((el) => (el + '').padEnd(3) + '🟩'.repeat(el)));

  temp[i] = ((array[i] + '').padEnd(3)).concat('⬜️'.repeat(array[i]));
  temp[j] = ((array[j] + '').padEnd(3)).concat('🟥'.repeat(array[j]));
  return temp.join('\n') + '\n\n' + array.toString();
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