export function randomNumber () {
return Math.floor(Math.random() * 50) + 1;
};

export function yesOrNo (num,str) {
let result;
if ((num % 2 === 0 && str === 'yes') || (num % 2 !== 0 && str === 'no')) {
	result = "Correct";
  	} else if (num % 2 === 0 && str !== 'no') {
		result = str + " is wrong answer ;(. Correct answer was 'yes'.Let's try again,";
		} else if (num % 2 !== 0 && str !== 'no') {
    		  result = str + " is wrong answer ;(. Correct answer was 'no'.Let's try again,";
	 	  }
		  return result;
		 }
