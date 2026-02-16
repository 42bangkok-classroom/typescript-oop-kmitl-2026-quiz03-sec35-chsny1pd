export class User {
    public username : string 
    private password : string 
    private LOGIN_ATTEMPTS : number = 0

    constructor(username:string,password:string){
        this.username = username
        this.password = password
    }

    public login(password:string) : boolean {
        if(this.password == password){
            return true
        }
        else{
            return false
        }
    }

    public getLoginAttempts() : number {
        this.LOGIN_ATTEMPTS += 1
        return this.LOGIN_ATTEMPTS - 1
    }

    private validatePassword(){
        
    }
}
