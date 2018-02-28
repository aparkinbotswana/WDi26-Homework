//DrEvil
const DrEvil = function(amount) {
  if (amount === 1000000) {
    return `${amount} dollars (pinky)`;
  } else {
    return `${amount} dollars`;
  }
};

//MixUp
const mixUp = function(string1, string2) {
  if (string1.length > 2 && string2.length > 2) {
    const newString1 =
      string2.slice(0, 2) + string1.slice(2, string1.length + 1);
    const newString2 =
      string1.slice(0, 2) + string2.slice(2, string2.length + 1);

    return `${newString1} ${newString2}`;
  } else {
    console.log("Please enter strings with more than 2 letters!");
  }
};

//FixStart
const fixStart = function(aString) {
  const stringLength = aString.length;
  const restOfChars = aString.substr(1, stringLength); //"ubble"
  const firstChar = aString.substr(0, 1); //"b"
  console.log(firstChar);
  console.log(restOfChars);
  const replaced = restOfChars.replace(firstChar, str => "*");
  return `${firstChar}${replace}`;
};

//verbing
const verbing = function(aString) {

  switch (true) {
    case (aString.length >= 3):
      if (aString.endsWith("ing")) {
        return `${aString}ly`;
      } else {
        return `${aString}ing`;
      }
      break;
    case (aString.length < 3):
      return aString;
      break;
    default:
      return aString;
  }
};

//Not Bad

const notBad = function(aString) {
  const replace = aString.replace("not bad", str => "good");
  return replace;
}
