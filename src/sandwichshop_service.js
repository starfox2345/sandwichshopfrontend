class SandwichshopService {
    constructor(port){
        this.port = port
    }

    getSandwichshops(){
        fetch(this.port + `/sandwichshops`)
        .then(resp => resp.json())
        .then(data => console.log(data))
        .catch()
    }

}