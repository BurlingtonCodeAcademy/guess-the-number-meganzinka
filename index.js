const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
console.log(`Let's play a game. Think of a number that is between 1 and 100. \nI will use my superior computation skills and guess your number in less than 7 tries!`)

start();

async function start() {
  //let secretNumber = await ask("What is your secret number?\nI won't peek, I promise...\n");
  let max = 100; 
  let min = 1; 
  let guess = Math.floor((max - min)/2); //most efficient guess 

  //ask if my guess is right or wrong 
  let yesOrNo = await ask(`Is your number ${guess}? Enter Y if yes or N if No.\n`);
  //if yes, game is over 
  if (yesOrNo.toUpperCase().trim() == "Y") {
    console.log(`I KNEW your number was ${guess}!!!!`)
    //bummer, I'm wrong! I need more info to figure out new max, min and guess 
  } else { 
    let higherOrLower = await ask(`Is your number higher or lower than ${guess}? Enter H for higher or L for lower.\n`);
    while (higherOrLower.toUpperCase().trim() == 'H') {
          // if person's number higher, new min should be last guess +1, max should be same, new guess computed 
      min = guess + 1;
    } 
    while (higherOrLower.toUpperCase().trim =='L') {
      //if person's number is lower, new max should be last guess - 1, min should be the same, new guess computed.
      max = guess - 1;
      let yesOrNo = await ask(`Is your number ${guess}? Enter Y if yes or N if No.\n`);
    }

  }

  //console.log('You entered: ' + secretNumber);

  process.exit();
}


