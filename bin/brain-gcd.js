#!/usr/bin/env node
import {randomNumber, commonDivisor} from '../src/gcd.js';
import {game} from '../src/index.js'
const gameDescr = 'Find the greatest common divisor of given numbers';
const question = () => {
const num1 = randomNumber();
const num2 = randomNumber();
return `${num1} ${num2}`;
}
const checkAnswer = (quest,userAnswer) => {
const parts = quest.split(' ');
const num1 = Number(parts[0]);
const num2 = Number(parts[1]);

return commonDivisor(Number(num1),Number(num2),Number(userAnswer));
};
game(gameDescr,question,checkAnswer);
