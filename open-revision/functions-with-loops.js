// looping through the friends array
let friends = ['Alexandria', 'Camden', 'Kamila'];
for (let i = 0; i < friends.length; i++) {
	let friend = friends[i];
	// console.log('Hello ' + friend + ", I'm glad that you're here!");
}

// Guided Assignment

// Write your function 'getTotalGoals' here
// When called with an array of goals, it should return the total
// getTotalGoals([0,1,2]) //=> 3

//What do i want out of this? TOTAL GOALS
// What do i have at the moment = 0
function getTotalGoals(goalScored) {
	//start with zero goals
	let totalGoals = 0;
	for (let i = 0; i < goalScored.length; i++) {
		//add more goals as you move through each index
		totalGoals = totalGoals + goalScored[i];
	}
	return totalGoals;
}
console.log(getTotalGoals([0, 10, 2]));

// Drill 1: Formatting instructions

// Write a function called printInstructions.

// It should take in an array of steps(strings) and log each one, with the string
// "Step 1 - ", "Step 2 - " in front.

// loop through an unknown array
// create the loop

function printInstructions(instructions) {
	// let listOfInstructions =[]
	for (let i = 0; i < instructions.length; i++) {
		console.log(`Step ${i + 1} ${instructions[i]}`);
	}
}
printInstructions([
	'Remove the plastic wrapper',
	'Microwave 45 seconds',
	'Let cool',
	'Enjoy!',
]);

// Drill 2: Grading quizzes

// Let's grade some quizzes!

// Write a function gradeQuiz that takes in a student quiz(an array of strings) and the teachers copy
//  (another array of strings).It should return the number of correct items on the quiz
// - how many match between the student and teacher arrays.

let studentAnswers = ['C', 'D', 'D', 'B', 'A', 'C', 'B'];
let teachersCopy = ['A', 'D', 'G', 'B', 'B', 'C', 'B'];

//if the the value at the idex of this matches,add 1 to the score
//score should start at 0

function gradeQuiz(studentArray, teachersArray) {
	let score = 0;

	for (let i = 0; i < studentArray.length; i++) {
		if (studentArray[i] === teachersArray[i]) {
			score = score + 1;
		}
	}
	return score;
}

console.log(gradeQuiz(studentAnswers, teachersCopy));
