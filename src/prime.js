export function randomNumber () {
  return Math.floor(Math.random() * 50) + 1;
}
export function isSimpleNumber (number) {
  let result;
  let divisors = []
  if(number <= 1) {result = 'no'}
  for (let i = 1; i <= number; i++){
    if(number % i === 0) {
      divisors.push(i)
    }
  }
  if (divisors.length === 2) {
      result = 'yes'
  }
  else if (divisors.length > 2){
    result = 'no'
  }
  return result;
}
