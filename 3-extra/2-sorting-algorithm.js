/*
At the start of the course, you worked in teams to sort your team members, labelled by
numbers, in ascending or descending order.

Today, you will be applying the sorting algorithm you used in that exercise in code! 

Create a function called sortAges which:
- takes an array of mixed data types as input
- removes any non-number data types without using the built-in javascript filter method
- returns an array of sorted ages in ascending order 
  - HARD MODE - without using the built-in javascript sort method 😎

You don't have to worry about making this algorithm work fast! The idea is to get you to
"think" like a computer and practice your knowledge of basic JavaScript.
*/

function sortAges(arr) {
	const indexes = [];
	for (let i = 0; i < arr.length; i++) {
		if (isNaN(arr[i]) || typeof arr[i] === 'string') indexes.push(i);
	}
  // removing non-number data types 
	while (indexes.length) {
		arr.splice(indexes.pop(), 1);
	}
  // bubble sort algorithms (optimized) 
	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
	};
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
		for (let j = 0; j < i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
        noSwaps = false;
			}
		}
		if(noSwaps) break;
	}
	return arr;
}

/* ======= TESTS - DO NOT MODIFY ===== */

const agesCase1 = [
	'🎹',
	100,
	'💩',
	55,
	'🥵',
	'🙈',
	45,
	'🍕',
	'Sanyia',
	66,
	'James',
	23,
	'🎖',
	'Ismeal',
];
const agesCase2 = ['28', 100, 60, 55, '75', '🍕', 'Elamin'];

console.log(sortAges(agesCase1));
console.log(sortAges(agesCase2));

test("sortAges function works - case 1", () => {
  expect(sortAges(agesCase1)).toEqual([23, 45, 55, 66, 100]);
});

test("sortAges function works - case 2", () => {
  expect(sortAges(agesCase2)).toEqual([55, 60, 100]);
});
