class Sandwichshop {
    constructor({description, id, name, city_id, city}){
        this.description = description
        this.id = id
        this.name = name
        this.city_id = city_id
        this.city = city
        this.element = document.createElement('li');
        this.element.dataset['id'] = id; 
        this.element.id = `sandwichshop-${id}`;
    }

}