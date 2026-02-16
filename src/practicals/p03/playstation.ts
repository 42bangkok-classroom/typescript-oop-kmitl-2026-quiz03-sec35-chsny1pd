import { Product } from './product'

export class Playstation extends Product {
   readonly name : string 
   gen : number 
   protected price : number = 0
  // TODO: implement class properties, constructor with super(...), and methods
    constructor(name:string,gen:number,price?:number){
      super(name)
      this.name = name
      this.gen = gen
      if(price){
            this.price = price
        }
        if(!price){
            this.price = 0
        }
    }
    getProfile(){
        return (`${this.name} ${this.price}`)
    }
    getDiscountPrice(){
    this.price = (( 100 - Playstation.DISCOUNT_PERCENT ) * this.price ) / 100
    }
}