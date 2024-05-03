 PROBLEM//
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
 // • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

 // • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message 
// to that person letting them know you’re sorry you can’t invite them to dinner.

 // • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

SOLUTION//
let guests : string []= ["Rehan", "Touseef", "Mehmet", "Sufyan", "Asad", "Ahmed"];
console.log ("Unfortunately!I can only invite for two people only.")
while (guests.length > 2) {
    let removedguest = guests.pop();
    console.log(`Sorry ${removedguest},I can't invite you to dinner.` );
}
guests.forEach(guest => {
    console.log(`Dear $ {guest},you are still invited to dinner.`);
});
// Empty array
guests.splice(0,guests.length);
console.log(guests);

OUTPUT//
Unfortunately!I can only invite for two people only.
Sorry Ahmed,I can't invite you to dinner.
Sorry Asad,I can't invite you to dinner.
Sorry Sufyan,I can't invite you to dinner.
Sorry Mehmet,I can't invite you to dinner.
Dear $ {guest},you are still invited to dinner.
Dear $ {guest},you are still invited to dinner.
[]
