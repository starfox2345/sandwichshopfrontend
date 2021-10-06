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
        
    }

}

 