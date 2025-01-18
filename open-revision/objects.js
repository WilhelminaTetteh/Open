let gifts = {
	tommy: 'stuffed giraffe',
	lisa: 'coloring book',
	roberto: 'baseball cap',
	beth: 'suit of armor',
};

console.log(gifts['tommy']);

let myFavorites = {
	movie: 'Shrek',
	song: 'Bohemian Rhapsody',
	food: 'Lasagna',
};

console.log(myFavorites.movie); // 'Shrek'
console.log(myFavorites.song); // 'Bohemian Rhapsody'
console.log(myFavorites.food); // 'Lasagna'

// Adding key/value pairs to objects
// don't modify the object here

let fruitBasket = {
	apple: 'red',
	blackberry: 'black',
	orange: 'orange',
};

// Add the other fruits and colors using dot notation below
// NOTE: Remember that they are case-senstive
fruitBasket.mango = 'green';
fruitBasket.grapes = 'purple';
fruitBasket['african star apple'] = 'green';
console.log(fruitBasket);

let languages = {
	python: 'Guido van Rossum',
	cobol: 'Grace Hopper',
	javascript: 'Brendan Eich',
	java: 'James Gosling',
	swift: 'Chris Lattner',
};

console.log(languages);

// Updating key/value pairs of objects

let students = {
	jacob: {
		classes: ['math', 'chemistry', 'english'],
		grade: 11,
		age: 16,
	},
	guillermo: {
		classes: ['history', 'math', 'physics'],
		grade: 12,
		age: 17,
	},
};

// Write your solution here
// Hint: Use the 'temp' variable to hold on to one value while you swap it for the other.
let temp = students.jacob; //storing value in temp
//now give guillermo value to Jacob
students.jacob = students.guillermo; //swaped
//now give jacob's stored data to guillermo
students.guillermo = temp;
console.log(students);
