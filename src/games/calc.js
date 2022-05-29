import {
  cons,
} from '@hexlet/pairs';
import game from '../index.js';

const randomOperand = () => {
  const operands = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * 3);
  return operands[rand];
};

const calcGame = () => {
  const condition = 'What is the result of the expression?';

  const generateQuestionAndRigthAnswer = () => {
    const question = `${Math.floor(Math.random() * 50)} ${randomOperand()} ${Math.floor(Math.random() * 50)}`;

    const [first, operand, second] = question.split(' ');
    let result;
    switch (operand) {
      case '+':
        result = Number(first) + Number(second);
        break;

      case '-':
        result = Number(first) - Number(second);
        break;

      default:
        result = Number(first) * Number(second);
        break;
    }

    return cons(question, String(result));
  };

  game(condition, generateQuestionAndRigthAnswer);
};

export default calcGame;
