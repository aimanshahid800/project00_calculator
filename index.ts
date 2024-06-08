#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { sum, subtract, multiply, division } from "./operation.js";

async function main() {
  const questions = await inquirer.prompt([
    {
      type: "number",
      name: "num1",
      message: "Enter your 1st Number :",
    },
    {
      type: "number",
      name: "num2",
      message: "Enter your 2nd Number :",
    },
    {
      type: "list",
      name: "operator",
      message: "Select your Operator",
      choices: ["+", "-", "*", "/"],
    },
  ]);
  console.log(chalk.yellow("Question:"), questions);

  if (questions.operator == "+") {
    console.log(chalk.blue.bold("\t\t\tThis is Sum ➕"));
    sum(questions.num1, questions.num2);
  } else if (questions.operator == "-") {
    console.log(chalk.blue.bold("\t\t\tThis is Subtract ➖"));
    subtract(questions.num1, questions.num2);
  } else if (questions.operator == "*") {
    console.log(chalk.blue.bold("\t\t\tThis is Multiple ✖"));
    multiply(questions.num1, questions.num2);
  } else if (questions.operator == "/") {
    console.log(chalk.blue.bold("\t\t\tThis is Division ➗"));
    division(questions.num1, questions.num2);
  } else {
    console.log(chalk.red.bold("\t\t\tInvalid Operator"));
  }
}
main();
