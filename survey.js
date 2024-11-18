const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What's your name? ", (name) => {
  console.log(`My name is ${name}.`);
  rl.question("What's a sport you like to play? ", (sport) => {
    console.log(`I like to play ${sport}.`); 
    rl.question("What do you listen to while doing that? ", (music) => {
      console.log(`I like to listen to ${music} while playing ${sport}.`); 
      rl.question("Which meal is your favourite? ", (meal) => {
        console.log(`My favourite meal is ${meal}.`); 
        rl.close();
      });
    });
  }); 
}); 

