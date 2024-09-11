import { game } from '../index.js';

const randomNumber = () => {
    return Math.floor(Math.random() * 50) + 1;
};

const yesOrNo = () => {
    const num = randomNumber();
    let correctAnswer;
    if (num % 2 === 0) {
        correctAnswer = "yes";
    } else if (num % 2 !== 0) {
        correctAnswer = 'no';
    }
    return [num, correctAnswer];
}

const gameDescr = 'Answer "yes" if the number is even, otherwise answer "no".';

game(gameDescr, yesOrNo)