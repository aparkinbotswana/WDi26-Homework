console.log ('Is this thing on?');

const DrEvil = function (amount){
if (amount === 1000000) {
  console.log(`${amount} dollars pinky`);
  return amount;
} else {
  console.log(`${amount} dollars`);
  return amount;
}
}
  DrEvil(1000000);
  DrEvil(10);



  const mixUp = function(word1, word2) {
    console.log(word2.slice(0, 2) + word1.slice(2) + " " + word1.slice(0, 2) + word2.slice(2));
  }

  mixUp(dog,dinner);



  const verbing = function(word) {
    if (word.length < 3) {
    console.log(word);
    if (word.slice(-3) === 'ing') {
      console.log(`${word}ly`);
    } else {
      console.log(`${word}ing`);
    }
  }

verbing(test);
