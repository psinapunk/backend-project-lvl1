import {
  cons,
} from '@hexlet/pairs';
import game from '../index.js';

const findPrimeNumber = () => {
  const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const generateQuestionAndRigthAnswer = () => {
    const question = Math.floor(Math.random() * 200);
    let rightAnswer;

    if (question === 1 || question === 2) {
      rightAnswer = 'yes';
    } else {
      for (let i = 2; i <= Math.sqrt(question); i += 1) {
        if (question % i === 0) {
          rightAnswer = 'no';
          break;
        } else {
          rightAnswer = 'yes';
        }
      }
    }

    return cons(question, rightAnswer);
  };

  game(condition, generateQuestionAndRigthAnswer);
};
export default findPrimeNumber;
