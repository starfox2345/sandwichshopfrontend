class SandwichshopService {
    constructor(port){
        this.port = port
    }

    getSandwichshops(){
        // fetch(this.port + "/sandwichshops")
        fetch("http://localhost:3000/sandwichshops")
        .then(f => f.json())
        .then(data => {
            for(const sandwichshop of data){
                let s = new Sandwichshop(sandwichshop)
                s.attachToDom()
            }
        })
        .catch()
        // console.log('hello')
    }

    createSandwichshops(){
        const sandwichshopInfo = {
            sandwichshop: {
                name: nameValue.value,
                description: descriptionValue.value,
                city_id: dropDown.value,
                city_name: cityInput.value
            }
        }
        const configObject = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"                
            },
            body: JSON.stringify(sandwichshopInfo)
        }
        
        fetch("http://localhost:3000/sandwichshops", configObject)
        .then(resp => resp.json())
        .then(data => {
            const s = new Sandwichshop(data)
            // const s = new Sandwichshop({id:json.data.id, ...json.data.attributes})
            const cit = City.all.find(c => parseInt(c.id) === s.city_id)
            if(!cit){
                
                let citObj = new City({id: data.attributes.city_id, name: data.attributes.city_name})
                // citObj.addToDom()
                citObj.addToDropDown()

            }
            s.attachToDom()
        })
    }

    updateSandwichshop(sandwichshop){
        const {name, description, id} = sandwichshop
        const sandwichshopInfo = {
            name,
            description
        }

        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"                
            },
            body: JSON.stringify(sandwichshopInfo)

        }
        
        fetch(this.port + `/sandwichshops/${id}`, configObject)
        .then(sandwichshop.render())
 
    }

    deleteSandwichshop(e){
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(this.port + `/sandwichshops/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}
