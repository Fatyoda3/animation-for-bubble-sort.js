const stringRepOf = (array, i, j) => {

  const temp =
    array.map(el => '🟩'.repeat(el));
  temp[i] = '⬜️'.repeat(array[i]);
  temp[j] = '🟥'.repeat(array[j]);
  return temp.join('\n');
};

const delay = () => { for (let _ = 0; _ < 10e8 * 2; _++); };

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

  console.log(stringRepOf(arr));
  return arr;
};
(sort([2, 5, 11, 7, 3, 1]));