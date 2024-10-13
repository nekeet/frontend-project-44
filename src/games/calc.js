import game from '../index.js';

const randomNumber = () => Math.floor(Math.random() * 10) + 1;
const RandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randomIndex = Math.floor(Math.random() * operators.length);
  return operators[randomIndex];
};
const calc = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const operator = RandomOperator();
  const question = `${num1} ${operator} ${num2}`;
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = num1 + num2;
  } else if (operator === '-') {
    correctAnswer = num1 - num2;
  } else if (operator === '*') {
    correctAnswer = num1 * num2;
  }
  return [question, correctAnswer];
};

const gameDescr = 'What is the result of the expression?';

game(gameDescr, calc);
