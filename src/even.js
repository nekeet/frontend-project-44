export function randomNumber () {
return Math.floor(Math.random() * 50) + 1;
};

import needName from '../src/cli.js'

let correctAnswers = 0;
let mistakeAnswers = 0;
export function yesOrNo (num,str) {
let result;
if ((num % 2 === 0 && str === 'yes') || (num % 2 !== 0 && str === 'no')) {
	result = "Correct";
	correctAnswers++;
  	} else if (num % 2 === 0 && str !== 'no') {
		result = str + " is wrong answer ;(. Correct answer was 'yes'.Let's try again,";
		mistakeAnswers++;
		} else if (num % 2 !== 0 && str !== 'no') {
    		  result = str + " is wrong answer ;(. Correct answer was 'no'.Let's try again,";
   		  mistakeAnswers++;
	 	  }
		 	 if (correctAnswers >= 3) {
		  	return 'Congratulations, ' + name + '!';
		 	 }
		  		if (mistakeAnswers >=3) {
		  		return 'Bad news, ' + name;
		  	 	}
		  return result;
		 }
