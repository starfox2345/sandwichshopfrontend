const port = `http://localhost:3000`;
const sandwichshopCall = new SandwichshopService(port);
const cityCall = new CityService(port);
const form = document.getElementById("sandwichshop-form");
const dropDown = document.getElementById("city-dropdown");
const nameValue = document.getElementById('sandwichshop-name');

sandwichshopCall.getSandwichshops()
cityCall.getCities()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    sandwichshopCall.createSandwichshops()
}
