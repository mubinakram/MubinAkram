// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.


let names: string[] = ["Rehan","Danish","Touseef", "Sufyan", "Ahmed", "Hasham", "Asad"];
let message: string[] = ["congratulations on your achievement"]
for (const name of names) {
    console.log(`${name}, ${message}`);
  }
