export function getRandomNumber (min,max)  {
  return Math.floor(Math.random()*(max-min + 1) + min);
}


export function progression (first,step,length) {
  let result = [];
  for (let i = 0; i <length ; i++){
    result.push(first + i * step);
  }
  return result; 
}

