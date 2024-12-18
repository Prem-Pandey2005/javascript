class User{
    constructor(email, password){
        this.email = email
        this.password = password
    }
    getemail(){
    return this._email.toUpperCase()
    }
    setemail(value){
    this._email = value
    }

    get password(){
    return this._password.toUpperCase()
    }
    set password (value){
    this._password = value
    }
}

const prem = new User("prem@gmail.com", "123")
console.log(prem.password)
console.log(prem.email)


