// Initial code

let product = {
	name: 'headphones',
	price: 120,
	doesItWork: false,
	previousOwner: 'Bob',
};

for (let key in product) {
	console.log(key, product[key]);
	console.log(`${key}:${product[key]}`);
}

//2. Delete the previousOwner property.
delete product.previousOwner;
console.log('this is the new product object', product);

// 3.Update the doesItWork property to be true.
product.doesItWork = true;

console.log('this is the new product object', product);

// 4. Create a conditional that will check if the price of the product is higher than 100.
// In case it is, add a new property discountPercentage with a value of 10.

if (product.price > 100) {
	// add property discountPercentage: 10
	product.discountPercentage = 10;
}
console.log(
	'this is the new product object after conditional',
	product
);

// new price should be price - 10%
let discountedPrice = product.price * (10 / 100);
console.log(discountedPrice);

product.price = product.price - discountedPrice;

console.log(
	'this is the new price after discount is applied :',
	product.price
);

// Finally, create a conditional that, using the in operator, will check of the discountPercentage
//property exists in the object and,
// if so, create a console.log() that uses the three property values to look something like this:
// "We got some headphones on sale for just $108, that's 10% o

if ('discountPercentage' in product) {
	console.log(
		'We got some ' +
			product.name +
			' on sale for just $' +
			product.price +
			", that's 10% off!"
	);
}
