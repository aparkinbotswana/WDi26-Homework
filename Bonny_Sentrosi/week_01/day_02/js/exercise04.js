/*let radius = 17;
let radiusSquared = radius * radius;
let pi = 3.14159265359;
let area = pi * radiusSquared;
let circumference = radius * 2 * pi;

console.log("The circumference is " + circumference + " and the area is " + area);
*/

const fixStart = function(anyString) {
  let firstLetter = anyString.charAt(0);
  /*let firstLetter = /.str[0]/gi; */
  let changeString = anyString.replace(firstLetter, '*');
  /*let firstLetter = str.replace([0], str[0]);*/
  return(changeString);
};
