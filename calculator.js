const firstValue = parseInt(prompt("What's the value ?"));

const operator = prompt("What's the operator ?");

const secondValue = parseInt(prompt("What's the second value ?"));

if (operator === '+') {
       console.log(firstValue + secondValue);
  } else if (operator === '-') {
       console.log(firstValue - secondValue);
  } else if (operator === '*') {
       console.log(firstValue * secondValue);
  } else if (operator === '/') {
       console.log(firstValue / secondValue);
  }