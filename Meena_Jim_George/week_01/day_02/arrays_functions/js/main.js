/*Array and Functions Bonus Material
Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
*/
console.log('Testing!')


const maxOfTwoNumbers=function(a,b){
  if(a>b)
  {
  console.log(`${a} is the largest number`);

  }

}
maxOfTwoNumbers(5,2);
 /*
 Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.
 */
 const maxOfThree = function(a,b,c){
   if((a > b) && (a > c))
   {
     console.log(`${a}`);
   }
       else if((b > a) && (b > c))
       {
         console.log(`${b}`);
       }
          else
         {
           console.log(`${c}`);
         }

}
 maxOfThree(21,40,6);

/*Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.*/
const character=function(vowel){

  if((vowel == 'a')||(vowel === 'e')||(vowel === 'i')||(vowel ==='o')||(vowel ==='u'))
  {

    console.log(`true`);
  }
  else {
    console.log(`false`);
  }
}
character('f');

/*Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in
an array of numbers.
For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.*/



const sumArray=function(sumThisArray){
  // const sum=['','','',''];
  console.log(`Array content is: ${sumThisArray}`)
  let a = 0;
  for(let i = 0; i < sumThisArray.length; i++)
 {
  a = a + sumThisArray[i];
//console.log(`${a}`);
 }
 console.log(`Sum of the array is ${a}`);
}
sumArray([1,2,3,7,10]);

//Multipy array
const multiplyArray=function(multiplyThisArray){
let a=1;
console.log(`Array content is ${multiplyThisArray}`);
  for(let i=0;i<multiplyThisArray.length;i++)
  {
    a = a * multiplyThisArray[i];
  }
  console.log(`Product of the array is ${a}`);
}

multiplyArray([1,2,3,5]);

/*Bonus

/*Define a function reverseString that computes the reversal of a string.
For example, reverseString("jag testar") should return the string "ratset gaj".*/
const reverseString = function(str){
  const splitStr = str.split("");
  const reverseArray = splitStr.reverse();
  const joinArray = reverseArray.join("");

  console.log(`${joinArray}`);
  return joinArray;

}
reverseString('Malayalam');

//Write a function findLongestWord that takes an array of words and returns the length of the longest one.
const findLongestWord= function(arrayOfWords){
  for(let i=0;i<arrayOfWords.length;i++){
    console.log(arrayOfWords[i].length);
  }
}


findLongestWord(["orange","1","seasons","celebrations"])

/*Write a function filterLongWords that takes an array of words and an number i and
returns the array of words that are longer than i.*/
