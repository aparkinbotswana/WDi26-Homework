/*let myAge = 36;
let maxAge = 85;
let dailySnax = 5;

// in order to calculate, I need to take my max age, minus my current age and then multiply by 365 store in a var
let yearsLeft = maxAge - myAge;
let daysLeft = yearsLeft * 365;

// then I need to multiply that amount by the dailySnax
let totalSnax = daysLeft * dailySnax;

console.log("I will need " + totalSnax + " snacks to last me until the ripe old age of " + maxAge);
*/

const mixUp = function(string1, string2) {
  return `${string2[0]}${string2[1]}${string1.slice(2)} ${string1[0]}${string1[1]}${string2.slice(2)}`
};
