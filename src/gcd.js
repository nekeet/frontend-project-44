export function randomNumber () {
return Math.floor(Math.random() * 50) + 1;
};
export function commonDivisor(num1,num2,userAnswer) {
let divisor = 1;
let result;
const min = Math.min(num1,num2);
for (let i =1; i<=min; i++) {
	if(num1 % i === 0 && num2 % i === 0){
	divisor = i
	}
}
	if(Number(userAnswer) === divisor){
	result = 'Correct';
	} else {
	result = `${userAnswer} is wrong answer ;(. Correct answer was ${divisor}`
}
return result;
}
