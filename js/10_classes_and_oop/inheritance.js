class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class teacher extends user{
    constructor(username, email, password){

      super(username)  //we dont have to call and do this 
      this.email = email
      this.password = password
    }
    addCourse (){
        console.log(`A new course was added by ${this.username}`)
    }

    
}

const chai = new teacher("chai", "chai@fb.com", 123
)
chai.addCourse()
chai.logMe()

const tea = new user("tea")
tea.logMe()

// console.log(chai === tea)

console.log(chai === teacher)
console.log(chai instanceof teacher)
console.log(chai instanceof user)