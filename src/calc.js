export function randomNumber () {
return Math.floor(Math.random() * 10) + 1;
};
export function getRandomOperator() {
const operators =['+','-','*'];
const randomIndex = Math.floor(Math.random() * operators.length);
return operators[randomIndex];
}
export function calc(num1,num2,operator,str) {
const sum = num1 + num2;
const umnozhenie = num1 * num2;
const vichitanie = num1 - num2;
let result;
const strNumber = Number(str);
if (operator === '+' && strNumber === sum) {
result = 'Correct';
} else if (operator === '+' && strNumber !==sum) {
result = `${str} is wrong answer ;(. Correct answer was  ${sum}`;
} else if (operator === '-' && strNumber === vichitanie) {
result = 'Correct';
} else if (operator === '-' && strNumber!==vichitanie) {
result = `${str}is wrong answer ;(. Correct answer was ${vichitanie}`;
} else if (operator === '*' && strNumber === umnozhenie) {
result = 'Correct'
} else if (operator ==='*' && strNumber !==umnozhenie) {
result = `${str} is wrong answer ;(. Correct answer was  ${umnozhenie}`
}
return result;
}

