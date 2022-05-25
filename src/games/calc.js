import askName from '../cli.js';
import {
  randomOperation, realCalc,
} from '../randomOperation.js';
import {
  printCondition, askQuestion, takeAnswer, checkAnswer, rigthAnswerCase, wrongAnswerCase,
} from '../index.js';

const calcGame = () => {
  let count = 0;
  const userName = askName();

  printCondition('What is the result of the expression?');

  while (count < 3) {
    const question = randomOperation();
    askQuestion(question);

    const answer = Number(takeAnswer());
    const rightAnswer = realCalc(question);
    const result = checkAnswer(answer, rightAnswer);

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

export default calcGame;
