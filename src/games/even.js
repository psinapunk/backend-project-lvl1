import game from '../index.js';

const evenNumber = () => {
  const condition = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateQuestion = () => Math.ceil(Math.random() * 100);
  const getrightAnswer = (question) => (question % 2 === 0 ? 'yes' : 'no');

  game(condition, generateQuestion, getrightAnswer);
};

export default evenNumber;
