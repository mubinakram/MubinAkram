// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that
//  check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array.
//  If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// let favouritefruit : string [] = ["Banana", "Strawberry", "Mango"];
// if (favouritefruit === 'Banana') {
//     console.log(I really like banana!)
// }
let favoriteFruits: string[] = ["Banana", "Strawberry", "Mango"];

if (favoriteFruits.includes("Banana")) {
    console.log("You really like bananas!");
}

if (favoriteFruits.includes("Strawberry")) {
    console.log("You really like strawberries!");
}

if (favoriteFruits.includes("Mango")) {
    console.log("You really like mangoes!");
}

if (favoriteFruits.includes("Apple")) {
    console.log("You really like apples!");
}

if (favoriteFruits.includes("Orange")) {
    console.log("You really like oranges!");
}

OUTPUT:
You really like bananas!
You really like strawberries!
You really like mangoes!
