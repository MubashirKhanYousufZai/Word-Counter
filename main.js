#! usr/bin/env node
// importing inquirer and chalk
import inquirer from "inquirer";
import chalk from "chalk";
// print a colorfull welcome massage
console.log(chalk.bold.cyanBright("\n \t\tWelcome to Code with Mubashir - Word counter"));
console.log("=".repeat(60));
let answers = await inquirer.prompt([
    {
        name: "sentence",
        message: "Enter your sentence",
        type: "input",
    },
]);
// Triming the sentence and splitting it into words based on "spaces"
// For removing extra spaces we can use trim method (.trim())
// (.split(" ")) this save the words of a sentence in an array
let words = answers.sentence.trim().split(" ");
// analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- Sentence words:"));
console.log(words);
console.log(chalk.bold(`\n - Word count: ${words.length}`));
console.log("=".repeat(60));
