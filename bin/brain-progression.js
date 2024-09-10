#!/usr/bin/env node
import {getRandomNumber,progression} from '../src/progression.js';
import {game} from '../src/index.js';

const gameDescr = 'What number is missing in the progression?';

const question = () => {
const first = getRandomNumber(0,50);
const step = getRandomNumber(1,5);
const length = getRandomNumber(5, 10);
const randomIndex = getRandomNumber(0,length - 1)
const progressionArray = progression(first,step,length);
const correctAnswer = progressionArray[randomIndex]
progressionArray[randomIndex] = '..';

return [progressionArray,correctAnswer];
}
const checkAnswer = (quest, userAnswer)=> {
const correctAnswer = quest[1] 
if (Number(userAnswer) === correctAnswer) {
    return 'Correct';
}else {
return `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`;
}
} 
game(gameDescr,question,checkAnswer);
