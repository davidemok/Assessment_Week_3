console.log("hello world");


let i=0;
function handleSubmit(evt) {
	evt.preventDefault();
	
	console.log('form submit');
	alert("FORM HAS BEEN SUBMITTED WELL DONE HUMAN")
}
function annoying(evt){
	evt.preventDefault();
	alert("BUBBERDUCKY USED DUCKY SQUAD AMBUSH ON YOU")
	i++
	if(i>10){
		alert("BUBBERDUCKY ENDS YOUR PATHETIC LIFE WITH BEEGEST MEGACHUNGUS SPLASH")
		i=0;
	}
}

let form = document.querySelector('#contact');
let duck = document.querySelector('#ducky')
form.addEventListener('submit', handleSubmit);
duck.addEventListener('mouseover', annoying);