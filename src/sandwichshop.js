class Sandwichshop {
    static all = [];
    static container = document.getElementById('sandwichshop-list');
    constructor({description, id, name, city_id, city}){
        this.description = description
        this.id = id
        this.name = name
        this.city_id = city_id
        this.city = city
        this.element = document.createElement('li');
        this.element.addEventListener('click', this.handleClick)

        Sandwichshop.all.push(this)
        
    }

    static filteredByCity(filteredCity){
        if(filteredCity){
            for(const i of Sandwichshop.all){
                if(i.city_id === parseInt(filteredCity.id)){
                    i.element.style.display = ""
                } else{
                    i.element.style.display = "none"
                }
            }
        } else{
            for(const i of Sandwichshop.all){
                i.element.style.display = ""
            }
        }
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="name">${this.name}</h2>
        <p class="description">${this.description}</p>
        </div>

        <button class="edit" data-id=${this.id}>Edit Sandwichshop</button>
        <button class="delete" data-id=${this.id}>Delete</button>
        
        `
        return this.element
    }

    renderSandwichshop(){
        Sandwichshop.container.appendChild(this.render())
    }

    handleClick = (e) => {
        if(e.target.innerText === "Edit Sandwichshop"){
            console.log(e.target)
            e.target.innerText = "Save Sandwichshop"
            this.createEditForm()
        }else if(e.target.innerText === "Delete"){
            console.log(e.target)
            sandwichshopCall.deleteSandwichshop(e)
        }else if(e.target.innerText === "Save Sandwichshop"){
            console.log("save works")
            e.target.innerText = "Edit Sandwichshop"
            this.updatedInfo()
        }
    }

    createEditForm(){
        const div = this.element.querySelector('div');
        for(const element of div.children){
            let inputValue = element.innerText;
            let name = element.classList[0];
            element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}"/>`
        }
        
    }

    updatedInfo(){
        this.name = this.element.querySelector(".edit-name").value;
        this.description = this.element.querySelector(".edit-description").value;
        sandwichshopCall.updateSandwichshop(this)
        
    }

    attachToDom(){
        
        Sandwichshop.container.appendChild(this.render())
    }

}

// --------------------------------------------------

// class Sandwichshop {
//     static all = [];
//     static container = document.getElementById('sandwichshop-list');

//     constructor({name, description, id, city_id}){
//         this.name = name
//         this.description = description
//         this.id = id
//         this.cityId = city_id
//         this.element = document.createElement('li')
//         this.element.addEventListener('click', this.handleClick)
//         Sandwichshop.all.push(this)
//     }

//     static filteredByCity(filteredCity){
//         if(filteredCity){
//         for(const i of Sandwichshop.all){
//             if(i.cityId === parseInt(filteredCity.id)){
//                 i.element.style.display = ""
//             }else{
//                i.element.style.display = "none" 
//             }
//         }
//     }else{
//         for(const i of Sandwichshop.all){
//             i.element.style.display = ""
//         }
//     }
 
//     }

//     render(){
//         this.element.innerHTML = `
//         <div>
//         <span class="name">${this.name}</span>
//         <span class="description">${this.description}</span>
//        </div>
//        <button class="edit" data-id= "${this.id}" >Edit</button>
//        <button class="delete" data-id= "${this.id}" >Delete</button>
//        `
//        return this.element
//     }

//     renderSandwichshop(){

//         Sandwichshop.container.appendChild(this.render())
//     }

//     handleClick = (e) => {
//         if(e.target.innerText === "Delete"){
//         SandwichshopService.deleteSandwichshop(e)
    
//         }else if(e.target.innerText === "Edit"){
//             e.target.innerText = 'Save'
//             this.createEditFields(e.target)
//         }else if(e.target.innerText === "Save"){
//             e.target.innerText = 'Edit'
//             this.saveUpdatedSandwichshop(e.target)
//         }
//     }

//     createEditFields(){
//         const div = this.element.querySelector('div');
//           for(const element of div.children){
//             let inputValue = element.innerText;
//             let name = element.classList[0];
//             element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
//         }
//     }

//     saveUpdatedSandwichshop(){
    
//         this.name = this.element.querySelector(".edit-name").value;
//         this.description = this.element.querySelector(".edit-description").value;
//     SandwichshopService.updateSandwichshop(this)

//    }
// }