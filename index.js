#! /usr/bin/env node
import inquirer from "inquirer";
// 1) compare will generate a random number
//2) user input for guessing number - Done.
// 3) compare user input with computer enerateed number and show result - done.
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log(randomNumber);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("congratulations! you guessed the right number");
}
else {
    console.log("you guessed the wrong number");
}
