class CityService {
    constructor(port){
        this.port = port
    }

    getCities(){
        fetch(`${this.port}/cities`)
        .then(resp => resp.json())
        .then(json => {
            json.forEach(element => {
                const c = new City(element)
                
            })
        })
    }
}