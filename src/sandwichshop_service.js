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
        debugger
        fetch("http://localhost:3000/sandwichshops")
        .then(resp => resp.json())
        .then(data => console.log(data))
    }

}

 