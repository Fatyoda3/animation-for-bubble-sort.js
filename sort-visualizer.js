const stringRepOf = (array, lastSwapped) => {

  const temp =
    array.map(el => '🟩'.repeat(el));
  temp[lastSwapped] = '⬜️'.repeat(array[lastSwapped]);
  temp[lastSwapped + 1] = '🟥'.repeat(array[lastSwapped]);
  return temp.join('\n');
};

const delay = () => { for (let _ = 0; _ < 10e7 * 2; _++); };

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
    let lastSwapped = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        lastSwapped = j;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }

      animate(stringRepOf(arr, lastSwapped));
    }

  }
  console.log(stringRepOf(arr));
  return arr;
};
(sort([23, 0, 1, 2, 11, 1, 2, 11, 1, 2, 11, 1, 2, 11, 1, 2, 11, 1, 2, 11, 1]));