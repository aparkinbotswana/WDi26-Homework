// Dr Evil
const drEvil = (amount) => {
  return `${amount} dollars ${amount === 1000000 ? '(pinky)' : ''}`;
};

console.log(drEvil(10));
console.log(drEvil(1000000));

// MixUp
const mixUp = (stringOne, stringTwo) => {
  const newStringOne = stringTwo.slice(0, 1) + stringOne.slice(1);
  const newStringTwo = stringOne.slice(0, 1) + stringTwo.slice(1);
  console.log(newStringOne, newStringTwo);
};

mixUp('foo', 'bar');

// FixStart
const fixStart = (string) => {
  const re = new RegExp(`\\B${string.slice(0, 1)}`, 'g', 'i');
  console.log(string.replace(re, '*'));
};

fixStart('babble');

// Verbing
const verbing = (string) => {
  if (string.length < 3) {
    return console.log(string);
  }
  if (string.slice(string.length - 3) === 'ing') {
    return console.log(`${string}ly`);
  }
  return console.log(`${string}${string.slice(-1)}ing`);
};

verbing('swim');
verbing('swimming');

// Not Bad
const notBad = (string) => {
  const re = /(not).*(bad)/gi;
  if (re.test(string)) {
    return console.log(string.replace(re, 'good'));
  }
  return console.log(string);
};

notBad('This dinner is not that bad!');
notBad('This movie is not so bad!');
notBad('This dinner is bad!');
