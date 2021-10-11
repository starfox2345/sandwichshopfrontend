class CityService {

    constructor(port){
        this.baseUrl = `${port}/cities`
    }
        

    getcities(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then( json => {
            json["data"].forEach(element => {
                const c = new City({id: element.id, ...element.attributes})
                c.addToDom()
                c.addToDropDown()
            })
        })
    }
}