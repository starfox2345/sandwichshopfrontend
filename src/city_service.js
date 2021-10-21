class CityService {

    constructor(port){
        this.baseUrl = `${port}/cities`
    }
        

    getCities(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then( json => {
            
            json.forEach(element => {
                const c = new City(element)
                c.addToDom()
                c.addToDropDown()
            })
        })
    }
    
}