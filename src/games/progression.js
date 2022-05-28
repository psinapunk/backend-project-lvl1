import {
  cons,
} from '@hexlet/pairs';
import game from '../index.js';

const findMissedNumb = () => {
  const condition = 'What number is missing in the progression?';

  const generateQuestionAndRigthAnswer = () => {
    const firstNumbOfProgression = Math.ceil(Math.random() * 10);
    const stepOfProgression = Math.ceil(Math.random() * 20);
    const lengthOfProgression = Math.ceil(Math.random() * 5) + 5;
    const placeForMissingNumb = Math.ceil(Math.random() * (lengthOfProgression - 1));

    const progression = [];
    let rightAnswer;
    let element = firstNumbOfProgression;

    for (let i = 0; i < lengthOfProgression; i += 1) {
      if (i === placeForMissingNumb) {
        rightAnswer = element;
        element = '..';
        progression.push(element);
        element = rightAnswer + stepOfProgression;
      } else {
        progression.push(element);
        element += stepOfProgression;
      }
    }
    const pairQuestionAndRightAnswer = cons(progression.join(' '), String(rightAnswer));
    return pairQuestionAndRightAnswer;
  };

  game(condition, generateQuestionAndRigthAnswer);
};

export default findMissedNumb;
