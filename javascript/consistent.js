// JS for land onwer to contact forester
// ACTION: Be consistent with your coding style.

let contactForester = false;
let treeCount = 457,
		treesToSell = 120;

if (treeCount > 300){
	contactForester = true
}

if (treesToSell > 100)
{
	contactForester = true;
}
else {
	contactForester = false;
}

if(contactForester){
	console.log("You're ready to sell your trees.") // expected result
} else {
	console.log('Don\'t sell your trees.')
}