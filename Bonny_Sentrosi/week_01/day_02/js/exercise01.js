console.log("Fun fact: I have a Russian Blue cat called Zephyr")

const squareNumber = function(num1) {
    const result1 = num1 * num1;
    return(`The result of squaring number ${ num1 } is ${ result1 }.`);
};


const halfNumber = function(num2) {
  const result2 = num2 / 2;
  return(`Half of ${ num2 } is ${ result2 }.`)
};

const percentOf = function(num3, num4) {
  const result3 = num3 / num4 * 100;
  return(`${ num3 } is ${ result3 }% of ${ num4}. Woah nelly!`)
};

const areaOfCircle = function(radius) {
  const area = (Math.PI * radius * radius).toFixed(2);
  return(`The area for a circle with a radius of ${ radius } is ${ area }. OMG I SO EXCITE!`)
};
/*
const meltMyBrain = function(ouch){
  const result1 = num1 * num1;
  const result2 = num2 / 2;
  const result3 = num3 / num4 * 100;
  const area = (Math.PI * radius * radius).toFixed(2);
  let summedUp = (ouch / 2) (summedUp )
};
*/
