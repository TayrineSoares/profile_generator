const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  rl.question("What's a sport you like to play? ", (sport) => {
    rl.question("What do you listen to while doing that? ", (music) => {
      rl.question("Which meal is your favourite? ", (meal) => {
        console.log(`My name is ${name}.\nI like to listen to ${music} while I play ${sport}.\nMy favourite meal is ${meal}.`); 
        rl.close();
      });
    });
  }); 
}); 

