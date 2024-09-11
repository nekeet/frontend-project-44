import { game } from '../index.js';


const getRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}



const progression = () => {
    const first = getRandomNumber(1, 50);
    const step = getRandomNumber(1, 5)
    const length = getRandomNumber(5, 10);
    const randomIndex = getRandomNumber(0, length - 1);
    let correctAnswer;
    let progressionArray = [];
    for (let i = 0; i < length; i++) {
        progressionArray.push(first + i * step);
    }
    correctAnswer = progressionArray[randomIndex];
    progressionArray[randomIndex] = '..'
    return [progressionArray, correctAnswer];
}

const gameDescr = 'What number is missing in the progression?';

game(gameDescr, progression)

