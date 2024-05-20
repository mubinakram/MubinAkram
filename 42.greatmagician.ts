// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that
//  modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians()
//   to see that the list has actually been modified.


function show_magicians(magicians: string[]): void {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Array of magician's names
let magician_names: string[] = ["Harry Houdini", "Ahmed", "Hassan", "Teller"];

// Call make_great to modify the magician_names array
make_great(magician_names);

// Call the function to show magician's names
show_magicians(magician_names);

output:

the Great Harry Houdini
the Great Ahmed
the Great Hassan
the Great Teller
