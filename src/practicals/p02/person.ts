export class Person {
    firstname : string = 'John'
    lastname : string = 'Doe'
    private age : number = 0
    static COUNTRY : string = 'Thailand'

    getFullName(){
        return (`${this.firstname} ${this.lastname}`)
    }
    getAge(){
        return this.age
    }
    setAge(age:number){
        if (age >=0) {
		this.age = age
    }
}
}