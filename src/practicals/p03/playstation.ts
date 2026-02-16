import { Product } from './product'

export class Playstation extends Product {
   readonly name : string 
   generation : number 
   protected price : number = 0
  // TODO: implement class properties, constructor with super(...), and methods
    constructor(name:string,genearation:number,price?:number){
      super(name)
      this.name = name
      this.generation = genearation
      if(price){
            this.price = price
        }
        if(!price){
            this.price = 0
        }
    }
    getProfile(){
        return (`${this.name} (Gen ${this.generation})`)
    }
    getDiscountPrice(){
    this.price = (( 100 - Product.DISCOUNT_PERCENT ) * this.price ) / 100
    }
}