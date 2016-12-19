// JS for tip tracking calculator
// ACTION: Use descriptive names. (variables, classes, functions)

// vars
let total = 0,
		avg = 0;		

// list 7 days of tips
const list = [2.22, 27.21, 4.10, 9.51, 76.45, 3.00, 43.02];

// add up tips
const calcTips = (arr) => {
	return arr.reduce((a, b) => a + b, 0);
}

// average up tips
const showTips = (arrayTotal, size) => {
	return arrayTotal / size;
}

total = calcTips(list);
avg = showTips(total, list.length);

console.log(total);
console.log(avg);

// results
// total = 165.51000000000002
// avg = 23.64428571428572