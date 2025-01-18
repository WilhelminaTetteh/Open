// Open a new pen on CodePen. In this exercise let's create a game of multiples, similar to FizzBuzz:

// create a for loop that will console.log the numbers from 1 through 50.

// Inside the loop, before the console.log, add a condition: if the number is divisible by 5, skip it. hint: use the modulo operator to check if a number is divisible by another and use the continue keyword to skip

// Add another condition: if the number is divisible by 10 or divisible by 15, console.log "Donkey!". hint: note that the previous step skips all numbers divisible by 5, and all numbers divisible by 10 or 15 are also divisible by 5, so if your "Donkey!" is not showing you might want to try switching the order of the conditions 😉

// Add one last condition: if the number is not divisible by 2 and the previous number is not divisible by 10, console.log "Monkey!".

// As a bonus, feel free to join all conditions together in a single conditional block (with else and else if statements), make the loop run from 50 to 1, or make up your own conditions! Practice makes the master!

let num = 50;
for (let index = 1; index <= num; index++) {
	if (index % 10 === 0 || index % 15 === 0) {
		console.log('Donkey');
	}

	// Add one last condition: if the number is not divisible by 2 and the previous number is not divisible by 10, console.log "Monkey!".
	if (index % 2 !== 0 && (index - 1) % 10 !== 0) {
		console.log('Monkey');
	}

	if (index % 5 === 0) {
		continue;
	}

	console.log(index);
}
