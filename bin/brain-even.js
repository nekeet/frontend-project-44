#!/usr/bin/env node
import {randomNumber, yesOrNo} from '../src/even.js';
import readlineSync from 'readline-sync';
console.log('Answer "yes" if the number is even, otherwise answer "no".')
while(true){
const number = randomNumber();
console.log('Question:' + ' ' + number);
const userAnswer = readlineSync.question("");
const result = yesOrNo(number,userAnswer);
console.log(result);
if (result === 'Congratulations' || result === 'Bad news'){
	break;
	}
}
