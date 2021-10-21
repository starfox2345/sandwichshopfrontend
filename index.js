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
const searchName = document.getElementById('search-name')
// const searchCity = document.getElementById('search-name')
// const searchBox = document.querySelector(".search-box input");

// searchBox.addEventListener("keyup", function(e) {
//     filterList(e.target.value)
// })

// const filterList = searchTerm => {
//     searchTerm = searchTerm.toLowerCase();
//     optionsList.forEach(option => {
//         let label = option.firstElementChild.nextElementSibling.innerText.toLowerCase()
//         if (label.indexOf(searchTerm) != -1) {
//             option.style.display = "block";
//         } else {
//             option.style.display = "none";
//         }
//     })
// }


// searchCity.addEventListener('keyup', (e) => {
//     const searchValue = e.target.value.toLowerCase()
//     const filteredCities = City.all.filter(city => {
//         return city.name.toLowerCase().includes(searchValue)
//     })
//     City.filterByCity(filteredCities)
// })


searchName.addEventListener('keyup', (e) => {
    const searchValue = e.target.value.toLowerCase()
    const filteredSandwichshops = Sandwichshop.all.filter(sandwichshop => {
        return sandwichshop.name.toLowerCase().includes(searchValue)
    })
    Sandwichshop.filterBySandwichshop(filteredSandwichshops)
})

// const searchBar = document.forms['search-sandwichshops'].querySelector('input');
// searchBar.addEventListener('keyup', function(e) {
//     const term = e.target.value.toLowerCase();
//     const sandwichshops = list.getElementByTagName('li');
//     Array.from(sandwichshops).forEach((sandwichshop) => {
//             const title = sandwichshop.firstElementChild.textContent;
//             if (title.toLowerCase().indexOf(term) != -1) {
//                 sandwichshop.style.display = 'block';
//             } else {
//                 sandwichshop.style.display = 'none';
//             }
//         })
// })


form.addEventListener('submit', handleSubmit)
// a function that is passed in to another function as an argument
function handleSubmit(e){
    e.preventDefault();
    sandwichshopCall.createSandwichshops()
}

sandwichshopCall.getSandwichshops();
cityCall.getCities();


// if statement that will alway sbe executed
// let number = 42;

// if(true){
//     console.log(number)
// }

// implement a search that I am able to search for a sandwichshop
// type in the name of the sandwichshop and it should display
// solution should be on frontend
// filter the list of shop that matches what's on search
// should only display search results