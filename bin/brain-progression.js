#!/usr/bin/env node
import {getStep,start,hiddenProgression,randomIndex,progression,hiddenIndex} from '../src/progression.js';
import {game} from '../src/index.js';

let arrayWithHiddenIndex,step,progressionArray;
const gameDescr = 'What number is missing in the progression?';

const question = () => {
const firstNumber = start();
step = getStep();
const progressionArray = progression(firstNumber,step);
const indexProgression = randomIndex();	
arrayWithHiddenIndex = hiddenProgression(progressionArray, indexProgression)
return arrayWithHiddenIndex;
}

const checkAnswer = (quest, userAnswer,hiddenArray)=> {
return hiddenIndex(arrayWithHiddenIndex, Number(userAnswer), step)
} 
game(gameDescr,question,checkAnswer)
