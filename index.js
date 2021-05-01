// Function Declaration
function adder(num1, num2) {
  return num1 + num2
}

// Arrow Functions
var adder1 = (num1, num2, ...restOfTheNums) => {
  // console.log('num1: ', num1);
  // console.log('num2: ', num2);
  // console.log('restOfTheNums: ', restOfTheNums);

  var currentSum = parseInt(num1) + parseInt(num2)

  restOfTheNums.forEach(number => {
    currentSum = currentSum + number
  });

  return currentSum
}

var result = adder1(3, 5, 4, 2, 1)

// console.log(result)

// Prompt

// var message = 'Number1 to add: '
// var number1 = prompt(message);
// console.log('number1: ', number1);

// var message2 = 'Number2 to add: '
// var number2 = prompt(message2);
// console.log('number2: ', number2);

// var result = adder1(number1, number2)
// console.log('result: ', result);
// console.log('result: ', typeof result);

// Prompt user to enter how many numbers you want to add
// Prompt user asking for the numbers to add in a for loop
// console.log(result)

var numberOfAddends = parseInt(prompt('How many numbers would you like to add together?'))
console.log('numberOfAddends: ', numberOfAddends);
console.log('numberOfAddends: ', typeof numberOfAddends);

var sum = 0

for (let i = 0; i < numberOfAddends; i++) {
  var number = parseInt(prompt(`Number ${i + 1} to add: `))
  console.log(`number ${i + 1}: `, number);
  sum = sum + number
}

console.log('sum: ', sum);
console.log('sum: ', typeof sum);
