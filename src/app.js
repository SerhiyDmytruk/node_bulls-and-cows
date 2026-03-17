'use strict';
import readline from 'node:readline';

const { getBullsAndCowsec } = require('./modules/getBullsAndCows.js');
const { generateRandomNumber } = require('./modules/generateRandomNumber.js');
const { checkIsValidUserInput } = require('./modules/checkIsValidUserInput.js');

// Write your code here
const randomNumber = generateRandomNumber();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('What is our number? ', (number) => {
  if (checkIsValidUserInput(number)) {
    getBullsAndCowsec(number, randomNumber);
  }

  rl.close();
});
