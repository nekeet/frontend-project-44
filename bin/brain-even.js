#!/usr/bin/env node
import {randomNumber, yesOrNo} from '../src/even.js';
import {game} from '../src/index.js'
const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = () => {
const number = randomNumber();
return number
};
const checkAnswer = (number,userAnswer) => {
return yesOrNo(number,userAnswer);
};
game(gameDescr,question,checkAnswer);
