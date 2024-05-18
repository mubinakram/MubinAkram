 Animals: Think of at least three different animals that have a common characteristic.
PROBLEM:
// Store the names of these animals in a list, and then use a for loop to print out the 
// name of each animal. • Modify your program to print a statement about each animal, 
// such as A dog would make a great pet. • Add a line at the end of your program stating
// what these animals have in common. You could print a sentence such as Any of these 
// animals would make a great pet!

SOLUTION:
function printAnimalStatement(animal: string): void {
    switch(animal) {
        case "lion":
            console.log("A lion is known as the king of the jungle.");
            break;
        case "dog":
            console.log("A dog would make a great pet.");
            break;
        case "fox":
            console.log("A fox is known for its cunning and agility.");
            break;
        default:
            console.log("Sorry, I don't have information about that animal.");
    }
}

const animals: string[] = ["lion", "dog", "fox"];

console.log("Animals and their characteristics:");
animals.forEach(animal => {
    printAnimalStatement(animal);
});

console.log("Any of these animals would make a great pet!");

OUTPUT:

Animals and their characteristics:
A lion is known as the king of the jungle.
A dog would make a great pet.
A fox is known for its cunning and agility.
Any of these animals would make a great pet!
