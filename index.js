const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}
<<<<<<< HEAD
//the point of this function is to choose which game to play
games (); 
async function games() {
  let chooseGame = "d"; 
  //Choose a game and the appropriate game will run 
=======
console.log(`Let's play a game. Think of a number that is between 1 and 100. \nI will use my superior computation skills and guess your number in less than 7 tries!`)
>>>>>>> ad742ed25a1b5f66ecab7354bfa540a155a41588

  while ((chooseGame.toLowerCase().trim() !== "a") && (chooseGame.toLowerCase().trim() !== "b") && (chooseGame.toLowerCase().trim() !== "c")) {
  chooseGame = await ask(`Welcome! Please see the following menu and pick your game by entering the letter of your choice: 
  a.) Play Computer Mind Reader - let the computer guess your secret number!
  b.) Play Player Guesser Game - try to guess the computer's game!
  c.) These games are lame and I am offended you think I would find them entertaining. Goodbye.\n`) 
  if (chooseGame.toLowerCase().trim() == "a") {
    start();
  } else if (chooseGame.toLowerCase().trim() == "b") {
    inverse(); 
  } else if (chooseGame.toLowerCase().trim() == "c") {
      process.exit() 
    }
  }
  }

<<<<<<< HEAD
async function start() { 

  //opening message 
  await ask(`\nWelcome to Computer Mind Reader! You will think of a number and I will use my superior clairvoyance to guess your secret number.
  \nPress any key when you've thought of your number.\n`);

  //starting values for max and min, declare min, max, guess variable 
  let max = await ask("Give me a number that is higher than your number - this will be the maximum number that I will guess.\n");
  max = +max;
  let min = 1;
  let guess = 0

  //set up a way to keep track of guesses so can caluclate number of guesses 
  let numbersGuessed = [];
  let count = 0; 
  function counter () {
    count = numbersGuessed.length
    return count 
  }; 

  //guesser function calculates a guess that is halfway between upper and lower bounds 
  function guesser (max, min) {
      guess =Math.floor((max + min)/2)
      numbersGuessed.push(guess); 
     return guess  
  }
  //calculate first guess
  guesser(max,min);

//start off yesOrNo as N to start the loop: 
  let yesOrNo = "N"; 
  while(yesOrNo.toUpperCase().trim() == "N") {

  //ask if my guess is right or wrong 
  yesOrNo = await ask(`Is your number ${guess}? Enter Y if yes or N if No.\n`);

//if yes, game is over 
if (yesOrNo.toUpperCase().trim() == "Y") {
  console.log(`I KNEW your number was ${guess}!!!! And I guessed it in only ${count} tries!\n`);
  
  //want to play again? if so, let's go to main menu. if not, exit program 
  let playAgain = await ask("That was F U N. Do you want to play another game? Type YES if you do\n");
  if (playAgain.toUpperCase().trim() === "YES") { 
    games (); 
  }
  else process.exit(); 
}

//if they didn't enter a Y or an N, try to ask about computer guess again 
while ((yesOrNo.toUpperCase().trim() != "Y") && (yesOrNo.toUpperCase().trim() != "N")) {
  yesOrNo = await ask(`You have to answer Y or N so I can know if I'm right!\n`); 
}

  //my guess is wrong so I need to figure out if higher or lower - start by defining variable and assigning to an unimportant value: 
    let higherOrLower = "A" 

    //need to keep asking until they answer H or L, then change max, min & guess depending on if too high or low 
    while ((higherOrLower.toUpperCase().trim() != "H") && (higherOrLower.toUpperCase().trim() != "L")) {
    higherOrLower = await ask(`Is your number higher or lower than ${guess}? Enter H if your number is higher or L if your number is lower.\n`)

    if (higherOrLower.trim().toUpperCase() === 'H') {
      //catch a cheater! eventually the cheater will be caught when they must say that their number is above the max that was set: 
      if (guess == max) {
        priorGuess = guess+1
        console.log(`You said your secret number was lower than ${priorGuess}. It can't be lower than ${lastGuess} and higher than ${guess}. There is no room for liars here. Goodbye.\n`)
        process.exit(); 
      } 
      //since the secret number is higher than the guess, new minimum is guess+1, calculate new guess and update the count:  
      else 
        min = guess + 1; 
        guesser(max, min)
        counter();
    } 

    else if (higherOrLower.trim().toUpperCase() === 'L') {
      if (guess == min) {
        priorGuess = guess-1;
        //catch a cheater! eventually the cheater will be caught if they say that their number is below the min: 
        console.log(`You said your secret number was higher than ${priorGuess}. It can't be lower than ${priorGuess} and higher than ${guess}.  There is no room for liars here. Goodbye.`)
        process.exit(); 
      }
      //since the secret number is lower than the guess, new max is guess-1, calculate teh new guess and update the count:  
      max = guess -1;
      guesser(max, min)
      counter(); 
    }
  }
  }
}

//reverse game!
async function inverse() { 
  //opening message 
  await ask("Now let's play a game where I choose a number and then YOU try to guess it. Press any key when you're ready to start!\n");

  //ask the max 
  let max = await ask("What do you want the maximum in our guessing game to be?\n")
  max = +max; 

  //let the computer choose a random number as the secret number 
  let playerGuess = 0;
  let computerNumber = Math.round((max+1)*Math.random()); 
  let numbersGuessed = [];
  let count = 0; 
  function counter () {
    numbersGuessed.push(playerGuess)
    count = numbersGuessed.length
    return count 
  }; 


// continue asking for guess until player's guess matches computer's guess 
  while (playerGuess !== computerNumber) {
  playerGuess = await ask(`I'm thinking of a number between 1 and ${max}. What is your guess? \n`);
  console.log("Not quite! Try again.")
  playerGuess = +playerGuess; 
  counter();
  }
// when playerGuess === computerNumber, exit while loop, give option to  return to main menu if they want to play another game. 
  let playAgain = await ask(`You did it! You guessed my number in ${count} tries. \nThat was F U N. Do you want to play another game? Type YES if you do.\n`);
  if (playAgain.toUpperCase().trim() === "YES") { 
    games(); 
  }
  else process.exit(); 
}
=======
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

>>>>>>> ad742ed25a1b5f66ecab7354bfa540a155a41588

