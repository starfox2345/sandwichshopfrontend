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
        Sandwichshop.all.push(this)
        
    }

    render(){
        this.element.innerHTML = `
        <div data-id="${this.id}">
        <h2 class="name">${this.name}</h2>
        <p class="description">${this.description}</p>
        </div>
        `
        return this.element
    }

    attachToDom(){
        
        Sandwichshop.cont.appendChild(this.render())
    }

}