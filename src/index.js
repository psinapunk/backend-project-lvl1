import readlineSync from 'readline-sync';

const printCondition = (condition) => {
  console.log(`${condition}`);
};

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const takeAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const rigthAnswerCase = () => {
  console.log('Correct!');
};

const wrongAnswerCase = (userName, answer, rightAnswer) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'\nLet's try again, ${userName}!`);
};

const checkAnswer = (answer, rightAnswer) => answer === rightAnswer;

export {
  printCondition, askQuestion, takeAnswer, rigthAnswerCase, wrongAnswerCase, checkAnswer,
};
