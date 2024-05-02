
// // Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations.
// //  You’ll have to think of someone else to invite.

let Guests :  string [] = ["Rehan", "Danish", "Touseef"];
let unavailable = "Danish";
console.log ( `${unavailable} can't make it to dinner.`);

// Replace the guest
let newGuest = " Mehmet";
Guests[Guests.indexOf(unavailable)] = newGuest;

// New invitation
 Guests.forEach(Guest => {
    console.log( `Dear ${Guest} I would like to invite you for a dinner party.It would be pleasure for me,if you come. `)
});

OUTPUT//
Danish can't make it to dinner.
Dear Rehan I would like to invite you for a dinner party.It would be pleasure for me,if you come. 
Dear  Mehmet I would like to invite you for a dinner party.It would be pleasure for me,if you come.
Dear Touseef I would like to invite you for a dinner party.It would be pleasure for me,if you come.
