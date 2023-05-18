"use strict";
//Generics
//type dataType= Person | Product;
class DataCollections {
    constructor() {
        this.items = [];
        /*getNames(): string[]{
            return this.items.map((item)=>item.name);
        }
    
        getItemById(id: number): T | undefined{
            return this.items.find((item: T)=> item.id === id);
       }*/
    }
    addItem(newItem) {
        this.items.push(newItem);
    }
    getItems() {
        console.log(`List of items`, JSON.stringify(this.items));
    }
}
const productCollection = new DataCollections();
const newData1 = {
    id: 1,
    name: 'Beer',
    price: 333
};
productCollection.addItem(newData1);
productCollection.getItems();
const personCollection = new DataCollections();
const newData2 = {
    id: 2,
    name: 'Angelica'
};
personCollection.addItem(newData2);
personCollection.getItems();
