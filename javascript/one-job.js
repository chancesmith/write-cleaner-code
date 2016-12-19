// JS for Chick-fil-a menu order app
// ACTION: Give each class/function one job to do.

let cart = [],
		promoItemNumber = 1;


let items = [
{
	id: 7,
	name: "Chick-fil-A® Chicken Sandwich",
	description: "A boneless breast of chicken seasoned to perfection, hand-breaded, pressure cooked in 100% refined peanut oil and served on a toasted, buttered bun with dill pickle chips. Also available on a multigrain bun.",
	ingredients: ['bun', 'chicken', 'pickels'],
	price: 4.99,
	discount: 1.0,
	calories: 440,
	protien: 28
},
{
	id: 77,
	name: "Frosted Coffee",
	description: "A delicious hand-spun treat that combines our custom blend of cold-brewed coffee with our famous vanilla Icedream®",
	ingredients: ['coffee', 'milk', 'ice'],
	price: 3.99,
	discount: 0,
	calories: 240,
	protien: 7
}]

//////
// START HERE...
//////

const showPromotionItem = (promoItem, itemOrdered) => {
	// promote item to customer
	console.log(`You would love a ${promoItem.name} with your ${itemOrdered.name}`);

	// show promo item price
	let price = promoItem.price * promoItem.discount;
	console.log(`Price of ${item.name} is ${price}`);
}

const addItemToCart = (item, promoItem) => {
	// calculate price
	let price = item.price * item.discount;
	console.log(`Price of ${item.name} is ${price}`);

	// add to cart
	let startCartSize = cart.length;
	cart.push(item);
	console.log(`Number of items in cart: ${cart.length}`);

	// show success message if item was added
	if(cart.length > startCartSize)
		console.log(`Your ${item.name} has been added to your cart.`);

	// give them something special if not what they ordered
	if (item.id !== promoItem.id) {
		showPromotionItem(promoItem, item);
	}
}

addItemToCart(items[0], items[promoItemNumber]);