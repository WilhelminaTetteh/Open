// One of the ways to access the characters inside the string is using charAt(n) method.

//  charAt(n) shows the character on the nth position in the string but keep in mind,
// the first character is indexed with zero (0).

const greeting = ' Wow!Hello there!';
console.log(
	`"${greeting}" is a string and it's length is ${greeting.length}.`
);
// "Hello there!" is a string and it's length is 12.
console.log(greeting.charAt(0)); // <== H
console.log(greeting.charAt(1)); // <== e
console.log(greeting.charAt(5)); // <== " "
console.log(greeting.charAt(11)); // <== !
console.log(greeting.charAt(12)); // <== "" as an empty string
