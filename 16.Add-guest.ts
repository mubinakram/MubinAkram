PROBLEM
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
//  • Print a new set of invitation messages, one for each person in your list.

SOLUTION//
let guests : string []= ["Rehan", "Touseef", "Mehmet"];
console.log("Good news!I have found a bigger dinner table!");

// Adding more guests
guests.unshift("sufyan");
guests.splice(guests.length /2,0,"Asad");
guests.push("Ahmed");

guests.forEach(guest=> {
    console.log(`Dear ${guest}, Would you like to join me for dinner.`)
});
//OUTPUT
Dear sufyan, Would you like to join me for dinner.
Dear Rehan, Would you like to join me for dinner.
Dear Asad, Would you like to join me for dinner.
Dear Touseef, Would you like to join me for dinner.
Dear Mehmet, Would you like to join me for dinner.
Dear Ahmed, Would you like to join me for dinner.
