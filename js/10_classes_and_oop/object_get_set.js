const user ={
    _email: "ppp@gmailcom",
    _password: "vbn",

get email(){
    return this._email.toUpperCase()
},

set email(value){
    this._email = value
}

}

const tea = Object.create(user)
console.log(tea.email)
