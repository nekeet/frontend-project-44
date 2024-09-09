export function getStep ()  {
  const lengthstep = Math.floor(Math.random()*5 + 2);
  return lengthstep;
}

export function start () {
  const first = Math.floor(Math.random()*20 + 1);
  return first;
}



export function progression (firstNumber,step) {
  let result = [];
  for (let i = 0; i <10 ; i++){
    result.push(firstNumber + i * step);
  }
  return result; 
}

export function randomIndex () {
  const index = Math.floor(Math.random() * 10 + 1);
  return index;
 }




export function hiddenProgression (progressionArray, indexProgression) {
 const hiddenArray = progressionArray.slice();
  hiddenArray[indexProgression] = '..';
  return hiddenArray;
}
export function hiddenIndex (arrayWithHiddenIndex, userAnswer, step ) {  
  let result;
  let correctAnswer ;
  for( let i = 0; i <arrayWithHiddenIndex.length; i++) {
    if (arrayWithHiddenIndex[i] === '..') {
      let hiddenIndex = i;
      correctAnswer =  arrayWithHiddenIndex[hiddenIndex - 1] + step;
      arrayWithHiddenIndex[i] = userAnswer;

    }
  }
   if (userAnswer === correctAnswer) {
      result = 'Correct';
    } else {
      result = `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}`;
    }
  return result;
}
