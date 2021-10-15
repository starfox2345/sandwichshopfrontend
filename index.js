const port = `http://localhost:3000`;
const sandwichshopCall = new SandwichshopService(port);
const cityCall = new CityService(port);
const form = document.getElementById("sandwichshop-form");
const ul = document.getElementById('sandwichshop-list')
const dropDown = document.getElementById("city-dropdown");
const cityInput = document.getElementById('city-id');
const nameValue = document.getElementById('sandwichshop-name');
const descriptionValue = document.getElementById('sandwichshop-description');
const baseURL = 'http://localhost:3000/sandwichshops'



form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    sandwichshopCall.createSandwichshops()
}

sandwichshopCall.getSandwichshops();
cityCall.getCities();
