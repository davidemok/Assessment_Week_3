function color(evt) {
	evt.preventDefault();
	
	console.log('hi');
	alert("My favorite color is light blue bordering on grey")
}

function place(evt) {
	evt.preventDefault();
	
	console.log('hello');
	alert("My favorite place is... nowhere in particular but any body of water that feels pristine, is a bit out of the way, and is away from people. Like that one part of a creek I used to fish where I had to wade through some water to reach it.")
}

function ritual(evt) {
	evt.preventDefault();
	
	console.log('yo');
	alert("My favorite ritual is going on a walk and seeing nature with my wife after a day of work")
}
let favColor = document.querySelector("#color")
let favPlace = document.querySelector("#place")
let favRitual = document.querySelector("#ritual")
favColor.addEventListener('click', color);
favPlace.addEventListener('click', place);
favRitual.addEventListener('click', ritual);

