const maxOfTwoNumbers = (a, b) => {
  return a > b ? a : b;
};

console.log(maxOfTwoNumbers(10, 5));

// -----------------------------------

const maxOfThreeNumbers = (a, b, c) => {
  let largest = a;
  largest = b > largest ? b : largest;
  largest = c > largest ? c : largest;
  return largest;
};

console.log(maxOfThreeNumbers(10000, 500, 55));

// ------------------------------------

const isVowel = (str) => {
  return `${str} ${/[aeiou]/gi.test(str) ? 'is a vowel' : 'is not a vowel'}`;
};

console.log(isVowel('a'));
console.log(isVowel('e'));
console.log(isVowel('i'));
console.log(isVowel('o'));
console.log(isVowel('u'));
console.log(isVowel('t'));

// ----------------------------------------
const sumArray = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4]));

// -----------------------------------------

const multArray = (array) => {
  let multSum = array[0];
  for (let i = 0; i < array.length; i++) {
    multSum = multSum * array[i];
  }
  return multSum;
};

console.log(multArray([1, 2, 3, 4]));

// -------------------------------------------

const reversString = (str) => {
  return str
    .split('')
    .reverse()
    .join('');
};

console.log(reversString('robert'));

// -------------------------------------

const findLongestWord = (words) => {
  let longest = words[0].length;
  for (let i = 0; i < words.length; i++) {
    const wordLength = words[i].length;
    longest = wordLength > longest ? wordLength : longest;
  }
  return longest;
};

console.log(findLongestWord(['a','aa','aaaa']));

const filterLongWords = (words,n) => {
  return words.filter((word)=>{
    return word.length>n;
  })
}

console.log(filterLongWords(['a','aa','aaaa','aaaaa','aaaaaaaa'],4));


