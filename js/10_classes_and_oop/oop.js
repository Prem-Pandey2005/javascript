// object literal

const user = {
    userName : "prem",
    logInCount : 8,
    signedIn : true,
    gotUserDetail : function(){
        // console.log("got user detail from Database");
        // console.log(`Username: ${this.userName}`
        // console.log(this)
 
    }

}

// console.log(user.userName);
// console.log(user.gotUserDetail());
// console.log(this)



// construtor function

function User(username, logInCount, isloggedIn ){
  this.username = username
  this.logInCount = logInCount
  this.isloggedIn = isloggedIn

  return this
}

const userOne =  new User("prem", 12, true)
const userTwo =  new User("chaiaurcode", 3 , false)
console.log(userOne)
console.log(userTwo)


