const isVowel = c => 'aeiou'.includes(c);

const findVowels = arr => {
  return arr.reduce((vowels, curr) => {
    for (let i = 0; i < curr.length; i++) {
      if (isVowel(curr[i])) {
        vowels.push(curr[i]);
      }
    }
    return vowels;

  }, []);
};
console.log(findVowels(['this', 'that', 'those']));