// // 43. Unchanged Magicians: Start with your work from Exercise 42. Call the function
// make_great() with a copy of the array of magicians’ names. Because the original array
//  will be unchanged, return the new array and store it in a separate array. Call 
//  show_magicians() with each array to show that you have one array of the original
//     names and one array with the Great added to each magician’s name.

function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        modifiedMagicians.push(`the Great ${magicians[i]}`);
    }
    return modifiedMagicians;
}

const magicians: string[] = [
  "magician 1",
  "magician 2",
  "magician 3",
  "magician 4",
  "magician 5",
  "magician 6",
];

let newMagicians: string[] = make_great([...magicians]);

console.log("Original magicians array: ");
show_magicians(magicians);
console.log("The Great magicians array: ");
show_magicians(newMagicians);

OUTPUT//
iginal magicians array: 
magician 1
magician 2
magician 3
magician 4
magician 5
magician 6
The Great magicians array: 
the Great magician 1
the Great magician 2
the Great magician 3
the Great magician 4
the Great magician 5
the Great magician 6
