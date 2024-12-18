class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createId (){
        return`123`
    }
}

const prem = new user("prem")
// console.log(prem.createId()) static doesnot allow any child or a grandchild to access it

class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }

}

const iphone = new teacher("iphone", "i@phone.com")
iphone.logMe()
// iphone.createId() static doesnot allow any child or a grandchild to access it 