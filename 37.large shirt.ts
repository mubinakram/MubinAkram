// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love 
// TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
//  message.


 function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`Making a ${size} shirt with the message: "${message}"`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt("Medium");

// Create a shirt of any size with a different message
make_shirt("Small", "Hello World!");

ouput:

Making a Large shirt with the message: "I love TypeScript"
Making a Medium shirt with the message: "I love TypeScript"
Making a Small shirt with the message: "Hello World!"
