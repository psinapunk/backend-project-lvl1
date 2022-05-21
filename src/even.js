import readlineSync from 'readline-sync';

const evenNumber = (userName) => {
  let count = 0;

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  while (count < 3) {
    const number = Math.ceil(Math.random() * 100);
    let rightAnswer = 'yes';

    if (number % 2 !== 0) {
      rightAnswer = 'no';
    }

    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer === rightAnswer) {
      console.log('Correct!');
      count += 1;
    } else if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default evenNumber;
