// 10. Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

// Muhammad Rehan Amjad.
// 2/17/2024.

// First Program:
let personName: string = "\n \t   mubin \t";
console.log(`name with white spaces : ${personName}`);
console.log(`name after striping the white spaces : ${personName.trim()}`);
// here trim() is a string method use to remove white spaces form start and end of string.

// Second Program:
//des: printing name in lowercase,uppercase and titlecase.

let perName: string = "mubin";
console.log(`uppercase : ${perName.toUpperCase()}`);
console.log(`lowercase : ${perName.toLowerCase()}`);

console.log(
  `titlecase : ${perName[0].toUpperCase() + perName.slice(1).toLowerCase()}`
);
/* here, 
            perName[0] --> access first character of string
        perName[0].toUpperCase() --> convert first character into uppercase
        perName.slice(1) --> access all character of string except first
        perName.slice(1).toLowerCase() --> convert them to character into uppercase
*/
