class City {

    static all = []
    static cityContainer = document.getElementById('city-container')

    constructor({name, state, zipcode, description, id, sandwichshops }){
        
        this.name = name
        this.state = state
        this.zipcode = zipcode
        this.description = description
        this.id = id
        this.sandwichshops = sandwichshops
        this.active = false

        this.element = document.createElement('button')
        City.all.push(this)

    }

    render(){
        this.element.innerText = this.name
        this.element.id = `city-${this.id}`
        return this.element
    }

    addToDom(){
        City.cityContainer.append(this.render())
        this.addListeners()
    }

    addListener(){
        this.element.addEventListener('click', this.setActiveCity)
    }

    setActiveCity = (e) => {
        let filteredCity
        // let body = document.querySelector('body');
        // body.style.backgroundColor = "green"
        City.all.forEach(c => {

            if(c.element === this.element && !this.active){
                c.element.classList.add('activated')
                c.active = true
                filteredCity = c
                
            }else{
                c.element.classList.remove('activated')
                c.active = false
            }
            Sandwichshop.filteredByCity(filteredCity)
        })
    }

    addToDropDown(){
        const option = document.createElement('option');
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }
}

