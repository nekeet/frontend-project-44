import game from '../index.js';

const randomNumber = () => Math.floor(Math.random() * 50) + 1;

const commonDivisor = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const question = `${num1} ${num2}`;
  const min = Math.min(num1, num2);
  let correctAnswer;
  for (let i = 1; i <= min; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      correctAnswer = i;
    }
  }
  return [question, correctAnswer];
};

const gameDescr = 'Find the greatest common divisor of given numbers';

game(gameDescr, commonDivisor);
