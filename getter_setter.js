class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}AI`
    }

    set password(value){
        this._password = value
    }
}

const AI = new User("h@AI.ai", "abc")
console.log(AI.email);