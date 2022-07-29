let rando = document.querySelector("#rando")
let restaurants = ["Vung Tau", "Raising Cane's", "Sultan's Kite", "Pho Factory", "The Oven", "Honest Abe's"]
function random(evt){
    evt.preventDefault();
    const randomElement = restaurants[Math.floor(Math.random() * restaurants.length)]
    alert(randomElement);
}
rando.addEventListener('click', random);