class City {
    constructor({name, state, zipcode, description, id, sandwichshops }){
        
        this.name = name
        this.state = state
        this.zipcode = zipcode
        this.description = description
        this.id = id
        this.sandwichshops = sandwichshops
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
    }
}