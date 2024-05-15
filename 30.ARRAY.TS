PROBLEM:
// // Hello Admin: Make an array of five or more usernames, including the name 'admin'. Imagine you are 
// writing code that will print a greeting to each user after they log in to a website. Loop through the array,
//     and print a greeting to each user:
// // • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a
// status report?

// // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

SOLUTION:

let usernames : string [] = ["ali123,", "hassan123", "ahmed123", "admin", "asad123", "rehan123" ];

for (let username of usernames)
if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
} else {
    console.log("Hello " + username + ", thank you for logging in again.");

OUTPUT:

Hello ali123,, thank you for logging in again.
Hello hassan123, thank you for logging in again.
Hello ahmed123, thank you for logging in again.
Hello admin, would you like to see a status report?
Hello asad123, thank you for logging in again.
Hello rehan123, thank you for logging in again.
