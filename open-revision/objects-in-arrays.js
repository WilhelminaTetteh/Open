let partyPeople = [
	{ name: 'Joe', attending: false },
	{ name: 'Jasmine', attending: true },
	{ name: 'Julio', attending: false },
	{ name: 'Julia', attending: true },
];

/*
loop through each item
check if the person is attending
if they are attending, say they are partying
otherwise, say they are burnt out
*/
for (let i = 0; i < partyPeople.length; i++) {
	if (partyPeople[i].attending) {
		console.log(partyPeople[i].name + ' is partying!');
	} else {
		console.log(partyPeople[i].name + ' is burnt out on partying =(');
	}
}

// This is extremely useful when you work with a huge object and you are not sure what properties it has.
//   Object.keys() receives an object as an argument.In our case it would be:

let olympicRecords = {
	athletics100Men: 'Justin Gatlin',
	athleticsLongJumpMen: 'Mike Powell',
};
let allKeys = Object.keys(olympicRecords);

console.log(allKeys);

// console output is an array:
// [ "athletics100Men", "athleticsLongJumpMen" ]
