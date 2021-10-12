// const port = `http://localhost:3000`;
// const sandwichshopCall = new SandwichshopService(port);
// const cityCall = new CityService(port);
// const form = document.getElementById("sandwichshop-form");
// const ul = document.getElementById('sandwichshop-list')
// const dropDown = document.getElementById("city-dropdown");
// const cityInput = document.getElementById('city-id');
// const nameValue = document.getElementById('sandwichshop-name');
// const descriptionValue = document.getElementById('sandwichshop-description');
// const baseURL = 'http://localhost:3000/sandwichshops'



// form.addEventListener('submit', handleSubmit)

// function handleSubmit(e){
//     e.preventDefault();
//     sandwichshopCall.createSandwichshops()
// }

// sandwichshopCall.getSandwichshops()
// cityCall.getCities()

// ----------------------------------------------------


const port = 'http://localhost:3000';
const sandwichshopService = new SandwichshopService(port);
const cityService = new CityService(port);
const dropdown = document.getElementById('cit-dropdown')
const cityInput = document.getElementById('city-id')
const ul = document.getElementById('sandwichshop-list');
const form = document.getElementById('sandwichshop-form');
const nameInput = document.getElementById('sandwichshop-name');
const descriptionInput = document.getElementById('sandwichshop-description');
const baseURL = 'http://localhost:3000/sandwichshops'
form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    sandwichshopService.createSandwichshops();
    e.target.reset();
    
}

sandwichshopService.getSandwichshops()
cityService.getCities()