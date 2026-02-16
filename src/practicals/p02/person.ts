export class Person {
    firstname : string = 'John'
    lastname : string = 'Doe'
    private _age : number =25 
    static COUNTRY : string = 'Thailand'

    getFullName(){
        return (`${this.firstname} ${this.lastname}`)
    }
    getAge(){
        return this._age
    }
    setAge(_age:number){
        if (_age >=0) {
		this._age = _age
    }
}
}