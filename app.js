// speacal Sum
var number1 = 0.1;
var number2 = 0.2;
var total =  number1 + number2;
console.log(total);

// fix it 1
var number1 = 0.1;
var number2 = 0.2;
var total =  number1 + number2;
total = total.toFixed(1);
total = parseFloat(total);
console.log(total);

// fix it 2
var number1 = 0.1;
var number2 = 0.2;
var total =  number1 + number2;
console.log(parseFloat(total.toFixed(1)));