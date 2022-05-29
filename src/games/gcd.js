import {
  cons, car, cdr,
} from '@hexlet/pairs';
import game from '../index.js';

const findGCD = () => {
  const condition = 'Find the greatest common divisor of given numbers.';

  const generateQuestionAndRigthAnswer = () => {
    const pairOfRandomNumbers = cons(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100));
    const question = `${car(pairOfRandomNumbers)} ${cdr(pairOfRandomNumbers)}`;

    const getPair = (first, second) => (first <= second ? cons(second, first) : cons(first, second));

    let pair = getPair(car(pairOfRandomNumbers), cdr(pairOfRandomNumbers));
    let reminder = car(pair) % cdr(pair);
    let result = cdr(pair);

    if (car(pair) === 0 && cdr(pair) === 0) {
      result = 0;
    } else if (car(pair) === 0) {
      result = Math.abs(cdr(pair));
    } else if (cdr(pair) === 0) {
      result = Math.abs(car(pair));
    } else {
      while (reminder !== 0) {
        pair = getPair(reminder, result);
        reminder = car(pair) % cdr(pair);
        result = Math.abs(cdr(pair));
      }
    }

    return cons(question, String(result));
  };

  game(condition, generateQuestionAndRigthAnswer);
};

export default findGCD;
