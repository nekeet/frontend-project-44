#!/usr/bin/env node
import {randomNumber, getRandomOperator, calc } from '../src/calc.js';
import readlineSync from 'readline-sync';
import {game} from '../src/index.js'

const gameDescr = 'What is the result of the expression?.';
const question = () =>{
const num1 = randomNumber();
const num2 = randomNumber();
const operator = getRandomOperator();
const string = `${num1} ${operator} ${num2}`
return [string, num1, num2, operator];
};
const checkAnswer = (quest,userAnswer) => {
const [string, num1, num2, operator]  = quest;
return calc(num1,num2,operator,userAnswer);
};
game(gameDescr,question,checkAnswer);
