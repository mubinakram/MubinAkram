// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love 
// TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different
//  message.

function make_shirt(size :string ="Large", message: string = "I love typescript"): void {
    console.log(`shirt's size is : '${size}',  "${message}" is printed on it`);
    
}
 make_shirt();
 make_shirt("medium")
 make_shirt("small", '"lets learn"')

output:

shirt's size is : 'Large',  "I love typescript" is printed on it
shirt's size is : 'medium',  "I love typescript" is printed on it
shirt's size is : 'small',  ""lets learn"" is printed on it
