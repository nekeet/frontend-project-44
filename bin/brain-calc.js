#!/usr/bin/env node
import {randomNumber, getRandomOperator, calc } from '../src/calc.js';
import readlineSync from 'readline-sync';
import {game} from '../src/index.js'

const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';
const question = () =>{
const num1 = randomNumber();
const num2 = randomNumber();
const operator = getRandomOperator();
return `${num1} ${operator} ${num2}`;
};
const checkAnswer = (quest,userAnswer) => {
const [num1,operator,num2] = quest.split(' ');
return calc(Number(num1),Number(num2),operator,userAnswer);
};
game(gameDescr,question,checkAnswer);
