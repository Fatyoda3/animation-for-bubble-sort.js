// [1,2,3,1,7,8,7,10] => [[1,2,3],[1,7,8],[7,10]]

const groups = (numbers) => {

  return numbers.reduce((group, el) => {

    const currGroup = group[group.length - 1];
    const prev = currGroup[currGroup.length - 1] || -Infinity;
    if (el > prev) {
      currGroup.push(el);
      return group;
    }

    group.push([el]);
    return group;

  }, [[]]);
};

console.log(groups([1, 2, 3, 1, 7, 8, 7, 10]));