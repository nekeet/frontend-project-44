#!/usr/bin/env node
import {randomNumber, commonDivisor} from '../src/gcd.js';
import {game} from '../src/index.js'
const gameDescr = 'Find the greatest common divisor of given numbers';
const question = () => {
const num1 = randomNumber();

const num2 = randomNumber();
return [`${num1} ${num2}`, num1, num2];
}
const checkAnswer = (quest,userAnswer) => {
const num1 = (quest[1]);
const num2 = (quest[2]);

return commonDivisor(num1,num2,userAnswer);
};
game(gameDescr,question,checkAnswer);
