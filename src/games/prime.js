import { game } from '../index.js';


const randomNumber = () => {
    return Math.floor(Math.random() * 50) + 1;
}


const isSimpleNumber = () => {
    const number = randomNumber();

    let correctAnswer;
    let divisors = 0;
    if (number <= 1) {
        result = 'no'
    }
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            divisors++;
        }
    }
    if (divisors === 2) {
        correctAnswer = 'yes'
    }
    else if (divisors > 2) {
        correctAnswer = 'no'
    }
    return [number, correctAnswer];
}

const gameDescr = 'Answer "yes" if given number is prime. Otherwise answer "no".';

game(gameDescr, isSimpleNumber)
