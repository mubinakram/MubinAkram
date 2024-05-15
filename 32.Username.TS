Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.// List of current usernames
let currentUsers: string[] = ['John', 'Mary', 'Alex', 'Sarah', 'Chris'];

// List of new usernames
let newUsers: string[] = ['Alex', 'Joe', 'Mike', 'Sarah', 'Sam'];

// Convert all current usernames to lowercase for case-insensitive comparison
let currentUsersLower: string[] = currentUsers.map(user => user.toLowerCase());

// Loop through newUsers to check if they are unique
for (let user of newUsers) {
    // Check if the lowercase version of the username exists in currentUsersLower
    if (currentUsersLower.includes(user.toLowerCase())) {
        console.log(`Sorry, the username '${user}' is not available. Please choose a different one.`);
    } else {
        console.log(`The username '${user}' is available.`);
    }
}
OUTPUT:

Sorry, the username 'Alex' is not available. Please choose a different one.
The username 'Joe' is available.
The username 'Mike' is available.
Sorry, the username 'Sarah' is not available. Please choose a different one.
The username 'Sam' is available.
 
