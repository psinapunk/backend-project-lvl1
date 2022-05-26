import readlineSync from 'readline-sync';
import askName from './cli.js';

const game = (condition, generateQuestion, getrightAnswer) => {
  const userName = askName();
  console.log(`${condition}`);
  let count = 0;

  while (count < 3) {
    const question = generateQuestion();
    const rightAnswer = getrightAnswer(question);
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
