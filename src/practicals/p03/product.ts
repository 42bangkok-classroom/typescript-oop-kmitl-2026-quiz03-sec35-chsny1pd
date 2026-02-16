export class Product {
    readonly name : string 
    protected price : number = 0
    static readonly DISCOUNT_PERCENT = 10

    constructor(name:string,price?:number){
        this.name = name
        if(price){
            this.price = price
        }
        if(!price){
            this.price = 0
        }
    }
    getPrice(){
        return this.price
    }
    setPrice(price:number){
        if (price >=0) {
		this.price = price
    }
}
}

