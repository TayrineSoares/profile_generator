const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? Nicknames are also acceptable :) ", (name) => {
  console.log(`My name is ${name}`);
  rl.question("What's an activity you like doing? ", (activity) => {
    console.log(`I like to: ${activity}`); 
    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`I like to listen to: ${music} while playing ${activity}`); 
      


  rl.close();
    });
  }); 
}); 

