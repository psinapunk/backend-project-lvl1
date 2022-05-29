import {
  cons,
} from '@hexlet/pairs';
import game from '../index.js';

const evenNumber = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';

  const generateQuestionAndRigthAnswer = () => {
    const question = Math.ceil(Math.random() * 100);
    const rightAnswer = question % 2 === 0 ? 'yes' : 'no';
    return cons(question, rightAnswer);
  };
  game(condition, generateQuestionAndRigthAnswer);
};

export default evenNumber;
