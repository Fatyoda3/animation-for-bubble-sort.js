const sort = (arr) => arr.toSorted((a, b) => a - b);
const isEven = (n) => n % 2 === 0;
const dbg = x => console.log(x) || x;
const partition = (arr) => {

  const parts = [[], []];
  const sorted = sort(arr);

  for (const num of sorted) {
    const bucket = isEven(num) ? parts[0] : parts[1];
    bucket.push(num);
  }
  return dbg(parts.flatMap(x => x));
};

partition([4, 2, 1, 3, 7]);