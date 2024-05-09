PROBLEM:
/ Intentional Error: If you haven’t received an array index error in one of your programs yet,
//  try to make one happen. Change an index in one of your programs to produce an index error.
//   Make sure you correct the error before closing the program.


let numbers: number[] = [1, 2, 3, 4, 5];

// Intentionally accessing an index beyond the array bounds
console.log(numbers[10]); // This will throw an error

// Correcting the error by accessing a valid index
console.log(numbers[2]); // Output: 3

output:

undefined
3
