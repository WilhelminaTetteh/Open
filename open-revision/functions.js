function sayHello() {
	console.log('Hello!');
}

sayHello();
sayHello();
sayHello();
sayHello();
sayHello();
sayHello();

function favouriteFood(food) {
	console.log('My favourite food is ' + food);
}

favouriteFood('banku');

function sayHelloToMyFriend(name) {
	console.log(`Hello, ${name}, it's nice to meet you!`);
}

sayHelloToMyFriend('Deniz'); //-> "Hello, Deniz, it's nice to meet you!"
sayHelloToMyFriend('Eddie'); //-> "Hello, Eddie, it's nice to meet you!"
sayHelloToMyFriend('Alaya'); //-> "Hello, Alaya, it's nice to meet you!"

//RETURN

function add(num1, num2) {
	return num1 + num2;
}

let result = add(200, 15);

console.log(result);

function greetFriend(name) {
	return name + ", it's good to see you!";
}

greetFriend('Khia');

// The greetFriend function - don't change it!
function greetFriend(friend) {
	return friend + ", it's good to see you!";
}

// Call the function for each friend, so the result will be logged

let khia = 'Khia';
let khiaResult = greetFriend(khia); // call the function here
console.log(khiaResult);

let tommy = 'Tommy';
let tommyResult = greetFriend(tommy);
console.log(tommyResult);

let cobie = 'Cobie';
let cobieResult = greetFriend(cobie);
console.log(cobieResult);
