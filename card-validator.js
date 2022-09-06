/*  **PROJECT: Credit Card Validator**

In this project you'll write a script that validates whether or not a credit card number is valid.

Here are the rules for a valid number:

- Number must be 16 digits, all of them must be numbers.
- You must have at least two different digits represented (all of the digits cannot be the same).
- The final digit must be even.
- The sum of all the digits must be greater than 16. */
function isSixteenDigit(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1 === 16;
}

function isTheLastDigitEven(num) {
	let lastDigit = num % 10;
	return lastDigit % 2 === 0;
}

function digitsSum(num) {
	let sum = 0;
	while (num) {
		sum += num % 10;
		num = Math.floor(num / 10);
	}
	return sum;
}

// alternative recursive function
function sumDigits(n) {
	if (n < 10) return n;
	return (n % 10) + sumDigits(Math.floor(n / 10));
}

console.log(isSixteenDigit('123a4567'), 'string');
console.log(isTheLastDigitEven(4563294));
console.log(digitsSum(12345), 'digits sum');
const creditCardValidator = (number) => {
	if (
		isSixteenDigit(number) &&
		!isNaN(number) &&
		isTheLastDigitEven(number) &&
		digitsSum(number) > 16
	) {
		return 'Valid';
	} else return 'Invalid';
};
console.log(creditCardValidator(12341234123412345));
