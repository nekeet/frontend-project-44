import readlineSync from 'readline-sync';

export const game = (gameDescr, roundResult) => {
    const name = readlineSync.question("May I have your name? ");
    console.log("Hello, " + name)
    console.log(gameDescr);
    for (let i = 0; i < 3; i++) {
        const [question, correctAnswer] = roundResult();
        console.log('Question: ' + question);
        const userAnswer = readlineSync.question('');
        let result;
        if (userAnswer == correctAnswer) {
            result = 'Correct';
        } else {
            result = `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ` + name + '!';
        }
        if (result === 'Correct') {
            console.log('Correct!');
        } else {
            console.log(result);
            return;
        }
    }
    console.log('Congratulations, ' + name + '!');
};