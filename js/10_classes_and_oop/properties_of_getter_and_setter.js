function User (email, password){
 this.email = email
 this.password = password
}

Object.defineProperty(this, 'email',{
    get:function(){
        return this._email.toUppercase()
    },
    set:function(value){
        return this._email = value
    }
})
const chai = new User("SUER#GMAIL.COM;")
console.log(chai.email)