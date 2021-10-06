class SandwichshopService {
    constructor(port){
        this.port = port
    }

    getSandwichshops(){
        // fetch(this.port + "/sandwichshops")
        fetch("http://localhost:3000/sandwichshops")
        .then(resp => resp.json())
        .then(data => {
            for(const sandwichshop of data){
                let s = new Sandwichshop(sandwichshop)
                s.attachToDom()
            }
        })
        .catch()
    }

    createSandwichshops(){
        const sandwichshopInfo = {
            sandwichshop: {
                name: nameValue.value,
                description: descriptionValue.value,
                city_id: dropDown.value
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
            s.attachToDom()
        })
    }

    updateSandwichshop(sandwichshop){
        const {name, description} = sandwichshop
        const sandwichshopInfo = {
            name,
            description
        }

        
        debugger
    }
}

 