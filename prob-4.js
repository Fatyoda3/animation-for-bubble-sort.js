const and = (x, y) => x.filter(el => y.includes(el));

console.log(and([1, 2, 3], [2, 3, 4]));