PROBLEM:
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
//  comparisons, write more tests. Have at least one True and one False result for each of the following:

// Tests for equality and inequality with strings
let str1: string = "karachi"
let str2: string = "pakistan"
console.log(str1 === str2)
  console.log(str1 !== str2)

// Tests using the lower case function

let inputString: string ="Ali";
console.log(inputString.toLocaleLowerCase()==="hello");

// Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less :than or equal to
 
let num1 : number =10
let num2 : number =2
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
  
// Tests using "and" and "or" operators

let condition1: boolean = true;
let condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

// Test whether an item is in an array


// Test whether an item is in an array
let fruits: string[] = ["apple", "banana", "orange"];
console.log(fruits.includes("apple"));  // True
console.log(fruits.includes("Mango"));  // False

// Test whether an item is not in an array
console.log(!fruits.includes("grape")); // True
console.log(!fruits.includes("apple")); // False

OUTPUT:

false
true
false
false
true
true
false
true
false
false
true
true
false
