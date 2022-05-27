import {
  cons, car, cdr,
} from '@hexlet/pairs';
import game from '../index.js';

const findGSD = () => {
  const condition = 'Find the greatest common divisor of given numbers.';

  const generateQuestion = () => {
    const question = `${Math.floor(Math.random() * 100)} ${Math.floor(Math.random() * 100)}`;
    return question;
  };

  const getPair = (first, second) => (first < second ? cons(second, first) : cons(first, second));

  const getrightAnswer = (question) => {
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

    return String(result);
  };

  game(condition, generateQuestion, getrightAnswer);
};

export default findGSD;
