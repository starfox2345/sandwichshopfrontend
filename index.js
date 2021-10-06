const port = `http://localhost:3000`;
const sandwichshopCall = new SandwichshopService(port);
const form = document.getElementById("sandwichshop-form");
const dropDown = document.getElementById("city-dropdown");

sandwichshopCall.getSandwichshops()

form.addEventListener('submit', handleSubmit)

function handleSubmit(e){
    e.preventDefault();
    
}
