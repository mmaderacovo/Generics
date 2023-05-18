//Generics

interface Person {
   id: number;
   name: string;
}

interface Product {
    id: number;
    name: string;
    price: number;
 }

 interface Employee extends Person{
    role: string;
 }

 //type dataType= Person | Product;

class DataCollections<T extends {id: number, name: string}>{
    private items: T[]=[];

    addItem(newItem: T):void{
        this.items.push(newItem);
    }

    getItems():void{
        console.log(`List of items`, JSON.stringify(this.items));
    }

    getNames(): string[]{
        return this.items.map((item)=>item.name);
    }

    getItemById(id: number): T | undefined{
        return this.items.find((item: T)=> item.id === id);
   }
}

const productCollection = new DataCollections<Product>();

const newData1 = {
    id: 1,
    name: 'Beer',
    price: 333
}

productCollection.addItem(newData1);
productCollection.getItems();

const personCollection = new DataCollections<Person>();

const newData2 ={
    id: 2,
    name: 'Angelica'
}

personCollection.addItem(newData2);
personCollection.getItems();