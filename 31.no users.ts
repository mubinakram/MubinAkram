/*
31. No Users: Add an if test  to Exercise 20 to make sure the list of users is not empty.
    • If the list is empty, print the message We need to find some users!
    • Remove all of the usernames from your array, and make sure the correct message is printed.
*/
let users: string[] = ["Admin", "Ali", "shan", "mehmet", "Ahmad"];

console.log("version 1 : runs if block");
if (users.length > 0) {
  for (let i = 0; i < users.length; i++) {
    if (users[i] === "Admin") {
      console.log(`Hello ${users[i]}, would you like to see a status report?`);
    } else {
      console.log(`Hello ${users[i]}, thank you for logging in again.`);
    }
  }
} else {
  console.log("We need to find some users");
}

console.log("version 2 : runs else block");
users.splice(0, users.length); // now array is empty
if (users.length > 0) {
  for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
  }
} else {
  console.log("We need to find some users");
}
OUTPUT:
version 1 : runs if block
Hello Admin, would you like to see a status report?
Hello Ali, thank you for logging in again.
Hello shan, thank you for logging in again.
Hello mehmet, thank you for logging in again.
Hello Ahmad, thank you for logging in again.
version 2 : runs else block
We need to find some users
