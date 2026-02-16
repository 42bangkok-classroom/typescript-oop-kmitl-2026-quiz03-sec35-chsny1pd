export class Person {
    firstname : string = 'John'
    lastname : string = 'Doe'
    private _age : number = 0
    static COUNTRY : string = 'Thailand'

    getFullName(){
        return (`${this.firstname} ${this.lastname}`)
    }
    getAge(){
        return this._age
    }
    setAge(age:number){
        if (age >=0) {
		this._age = age
    }
}
}