// level 2
// 1. Write a function to remove all even numbers from an Array.
// ```
// Input array: 
// [1, 3, 4, 6, 7, 8]
// ```
// ```
// Output should be array: [1, 3, 7]

function remove (numbers){
    return numbers.filter(n=>n%2!==0)
}
const newNumbers = remove ([1, 3, 4, 6, 7, 8])
console.log(newNumbers);




var  array= [1, 3, 4, 6, 7, 8, 2, 5]
console.log(Math.max(1, 3, 4, 6, 7, 8, 2, 5));




let string = "Elie";

let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
let s = string.split("");
let upperCase = [];
let result = s.map((i) => {
  if (vowels.includes(i)) {
    upperCase.push(i.toUpperCase());
  } else {
    upperCase.push(i);
  }
  return upperCase;
});
console.log(result[0].join(""));
