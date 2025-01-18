// Write your function 'buildEmailAddress' here
// When passed in arguments ("vinay", "gmail"), it should return "vinay@gmail.com"
// buildEmailAddress("vinay", "gmail") //=> "vinay@gmail.com"

function buildEmailAddress(name, suffix) {
	return `${name}@${suffix}.com`;
}

let email = buildEmailAddress('vinay', 'gmail');
let email2 = buildEmailAddress('mina', 'hotmail');

console.log(email);
console.log(email2);
