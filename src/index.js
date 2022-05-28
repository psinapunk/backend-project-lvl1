import {
  car, cdr,
} from '@hexlet/pairs';
import readlineSync from 'readline-sync';
import askName from './cli.js';

const game = (condition, generateQuestionAndRightAnswer) => {
  const userName = askName();
  console.log(`${condition}`);
  let count = 0;

  while (count < 3) {
    const pairQuestionAndRightAnswer = generateQuestionAndRightAnswer();
    const question = car(pairQuestionAndRightAnswer);
    const rightAnswer = cdr(pairQuestionAndRightAnswer);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
      break;
    }

    if (count === 3) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default game;
