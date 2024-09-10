#!/usr/bin/env node
import {randomNumber, isSimpleNumber} from '../src/prime.js';
import {game} from '../src/index.js'

const gameDescr = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const question =() => {
const number = randomNumber();
return [number];
}
const checkAnswer = (quest, userAnswer) => {
const number = quest[0];
const correctAnswer = isSimpleNumber(number);
if (userAnswer = correctAnswer) {
return 'Correct';
}else {
return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`;
} 
};
game(gameDescr,question,checkAnswer);
