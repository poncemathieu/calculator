const firstValue = prompt("What's the value ?");

const operator = prompt("What's the operator ?");

const secondValue = prompt("What's the second value ?");

if (operator === '+') {
    console.log(parseInt(firstValue) + parseInt(secondValue));
 } else {
        console.log(parseInt(firstValue) - parseInt(secondValue));
    }
