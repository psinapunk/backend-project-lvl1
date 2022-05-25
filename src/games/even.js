import askName from '../cli.js';
import { printCondition, askQuestion, takeAnswer, checkAnswer, rigthAnswerCase, wrongAnswerCase } from '../index.js'

const evenNumber = () => {
  let count = 0;
  const userName = askName();

  printCondition('Answer "yes" if the number is even, otherwise answer "no".');

  while (count < 3) {
    let question = Math.ceil(Math.random() * 100);
    askQuestion(question);

    let answer = takeAnswer();
    let rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    let result = checkAnswer(answer, rightAnswer);

    if (result) {
      rigthAnswerCase();
      count += 1;
    } else {
      wrongAnswerCase(userName, answer, rightAnswer);
      break;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default evenNumber;
