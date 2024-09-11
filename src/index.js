import readlineSync from 'readline-sync';

export const game = (gameDescr, roundResult) => {
    const name = readlineSync.question("Your name? ");
    console.log(gameDescr);
    for (let i = 0; i < 3; i++) {
        const [question, correctAnswer] = roundResult();
        console.log('Question: ' + question);
        const userAnswer = readlineSync.question('');
        let result;
        if (userAnswer == correctAnswer) {
            result = 'Correct';
        } else {
            result = `${userAnswer} is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again,`;
        }
        if (result === 'Correct') {
            console.log('Correct');
        } else {
            console.log(result);
            console.log(`${name}, you lose`);
            return;
        }
    }
    console.log('Congratulations, ' + name + '!');
};