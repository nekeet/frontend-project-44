import readlineSync from 'readline-sync';
export const game = (gameDescr, question,checkAnswer) => {
const name = readlineSync.question("Your name? ");
console.log(gameDescr);
for (let i=0; i<3;i++) {
const quest = question();
console.log('Question: ' + quest[0]);
const userAnswer = readlineSync.question('');
const result = checkAnswer(quest, userAnswer);
if(result === 'Correct') {
console.log('Correct');
} else {
console.log(result);
console.log(`${name}, you lose`);
return;
}
}
console.log('Congratulations, ' + name + '!');
};
