let input = require("readline-sync");
const chalk = require('chalk');
let score = 0;
let flag = 0;
const userName = input.question(chalk.blue("May I have your name? "));
console.log(chalk.bgYellow("Welcome ", userName, " to The Game of Thrones quiz!"))
// highscores 
var highScores = [
  {
    name: "bavi",
    score: "4"
  },
  {
    name: "karthik",
    score: "3"
  }
]
const questions = [
  {
    question: chalk.magenta("How did Daenerys Targaryen eventually hatch her dragon eggs? "),
    choices: ['In a lightning storm', 'In a funeral pyre', 'In a fireplace', 'In a frozen cave'],
    answer: "In a funeral pyre"
  },
  {
    question: chalk.magenta("Which U.S. city was one of 8 international locations visited by the 2015 'Game of Thrones' Exhibition?"),
    choices: ['Chicago', 'NYC', 'San Diego', 'Boston'],
    answer: "San Diego"
  },
  {
    question: chalk.magenta("The phrase 'Valar Morghulis' is usually responded with: "),
    choices: ['Valar Dohaeris', 'Valar Rohnas', 'Valar Valar', 'Valar GoGo'],
    answer: "Valar Dohaeris"
  },
  {
    question: chalk.magenta("What is the only thing that can put out volatile Wildfire?"),
    choices: ['Sand', 'Water', 'Dragons blood', 'Sun light'],
    answer: "Sand"
  },
  {
    question: chalk.magenta("Besides dragonglass, what is the only other substance capable of defeating White Walkers? "),
    choices: ['Weirwood', 'WildFire', 'Valyrian Steel', 'Snowballs'],
    answer: "Valyrian Steel"
  }
]

// main game function
function play(choices, question, answer) {
  const userAnswerIndex = input.keyInSelect(choices, question);
  if (choices[userAnswerIndex] === answer) {
    console.log(chalk.green("You are correct!"));
    score += 1;
  }
  else {
    console.log(chalk.red("Sorry, You are wrong!"));
    score -= 1;
  }
  console.log(chalk.blue("Your current score is :", score));
  console.log("-----------------------");
}

for (let i = 0; i < questions.length; i++) {
  play(questions[i].choices, questions[i].question, questions[i].answer);
}
console.log(chalk.green("Your final score is: ", score));
console.log(chalk.yellow("Following are the High scores :"))
for (let i = 0; i < highScores.length; i++) {
  console.log(chalk.red(highScores[i].name), chalk.red(":"), chalk.green(highScores[i].score))
  if (score > highScores[i].score) {
    flag += 1;
  }
}
if (flag > 0) {
  console.log(chalk.bgCyan("Congratulations! You have crossed the high score. Send me a screenshot of your score so that I can update it."))
}