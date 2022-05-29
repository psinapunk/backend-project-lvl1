import {
  cons, car, cdr,
} from '@hexlet/pairs';
import game from '../index.js';

const findGCD = () => {
  const condition = 'Find the greatest common divisor of given numbers.';

  const generateQuestionAndRigthAnswer = () => {
    const question = `${Math.floor(Math.random() * 100)} ${Math.floor(Math.random() * 100)}`;

    const getPair = (first, second) => (first < second ? cons(second, first) : cons(first, second));

    const [firstNum, secondNum] = question.split(' ');
    const arrayOfNumbers = [Number(firstNum), Number(secondNum)];
    const [first, second] = arrayOfNumbers;

    let pair = getPair(first, second);
    let reminder = car(pair) % cdr(pair);
    let result = cdr(pair);

    while (reminder !== 0) {
      pair = getPair(reminder, result);
      reminder = car(pair) % cdr(pair);
      result = cdr(pair);
    }

    return cons(question, String(result));
  };

  game(condition, generateQuestionAndRigthAnswer);
};

export default findGCD;
