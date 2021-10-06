class Sandwichshop {
    static all = [];
    static cont = document.getElementById("sandwichshops-cont")
    constructor({description, id, name, city_id, city}){
        this.description = description
        this.id = id
        this.name = name
        this.city_id = city_id
        this.city = city
        this.element = document.createElement('li');
        this.element.dataset['id'] = id; 
        this.element.id = `sandwichshop-${id}`;
        this.element.addEventListener('click', this.handleClick)

        Sandwichshop.all.push(this)
        
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
    handleClick = (e) => {
        if(e.target.innerText === "Edit Sandwichshop"){
            console.log(e.target)
            e.target.innerText = "Save Sandwichshop"
            this.createEditForm()
        }else if(e.target.innerText === "Delete"){
            console.log(e.target)

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
        debugger
    }

    attachToDom(){
        
        Sandwichshop.cont.appendChild(this.render())
    }

}